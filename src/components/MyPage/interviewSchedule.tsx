import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import LeftArrowBold from "../../assets/img/PNG/LeftArrowBold.png";
import RightArrowBold from "../../assets/img/PNG/RightArrowBold.png";
import Close from "../../assets/img/PNG//Close.png";
import { getITVquery } from "../../apis/interview";
import { postITVtime } from "../../apis/interview";
import { InterviewTimeType, MyInfoType } from "../../types/type";

interface Day {
  date: number;
  month: number;
  year: number;
}

interface Props {
  handleItvToggle: () => void;
  reportID: number;
  user: MyInfoType | undefined;
}

const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const firstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay();
};

const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const interviewSchedule: React.FC<Props> = ({
  handleItvToggle,
  reportID,
  user,
}) => {
  const [selectedDate, setSelectedDate] = useState<Day>({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [itvTime, setItvTime] = useState<InterviewTimeType[]>([]);
  const [selectedTimeId, setSelectedTimeId] = useState<number>(-1);
  const [sDate, setSDate] = useState<string>(
    `${selectedDate.year}-${String(selectedDate.month + 1).padStart(
      2,
      "0"
    )}-${String(selectedDate.date).padStart(2, "0")}`
  );
  const [sTime, setSTime] = useState<string>("00:00:00");

  const handleClose = () => {
    handleItvToggle();
  };

  const handleDateClick = (
    date: number,
    isPrevMonth?: boolean,
    isNextMonth?: boolean
  ) => {
    if (isPrevMonth) {
      setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
      setCurrentYear((prevYear) =>
        currentMonth === 0 ? prevYear - 1 : prevYear
      );
    } else if (isNextMonth) {
      setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
      setCurrentYear((prevYear) =>
        currentMonth === 11 ? prevYear + 1 : prevYear
      );
    } else {
      const newSelected: Day = { date, month: currentMonth, year: currentYear };
      setSelectedDate(newSelected);
      const newSDate = `${newSelected.year}-${String(
        newSelected.month + 1
      ).padStart(2, "0")}-${String(newSelected.date).padStart(2, "0")}`;
      setSDate(newSDate);
    }
  };

  const renderDays = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDayIndex = firstDayOfMonth(currentMonth, currentYear);
    const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const nextMonthDays =
      42 - (totalDays + (firstDayIndex ? prevMonthDays : prevMonthDays - 7));

    if (firstDayIndex !== 0) {
      for (let i = prevMonthDays + 1; i > 0; i--) {
        days.push(
          <Day
            key={`prev${i}`}
            isntCurrent={true}
            isSunday={false}
            isSaturday={false}
            isSelected={false}
            isPrevMonth
            onClick={() =>
              handleDateClick(
                daysInMonth(
                  currentMonth === 0 ? 11 : currentMonth - 1,
                  currentMonth === 0 ? currentYear - 1 : currentYear
                ) -
                  i +
                  1,
                true
              )
            }>
            {daysInMonth(
              currentMonth === 0 ? 11 : currentMonth - 1,
              currentMonth === 0 ? currentYear - 1 : currentYear
            ) -
              i +
              1}
          </Day>
        );
      }
    }

    for (let i = 1; i <= totalDays; i++) {
      const isSunday = (i + firstDayIndex) % 7 === 1;
      const isSaturday = (i + firstDayIndex) % 7 === 0;
      const isSelected = selectedDate && selectedDate.date === i;

      days.push(
        <Day
          key={i}
          isntCurrent={false}
          isSunday={isSunday}
          isSaturday={isSaturday}
          isSelected={isSelected}
          onClick={() => handleDateClick(i)}>
          {i}
        </Day>
      );
    }

    if (nextMonthDays > 0) {
      for (let i = 1; i <= nextMonthDays - 1; i++) {
        days.push(
          <Day
            key={`next${i}`}
            isntCurrent={true}
            isSunday={false}
            isSaturday={false}
            isSelected={false}
            isNextMonth
            onClick={() => handleDateClick(i, false, true)}>
            {i}
          </Day>
        );
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
    setSelectedDate((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 0 ? prevDate.year - 1 : prevDate.year,
      month: prevDate.month === 0 ? 11 : prevDate.month - 1,
    }));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
    setSelectedDate((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 11 ? prevDate.year + 1 : prevDate.year,
      month: prevDate.month === 11 ? 0 : prevDate.month + 1,
    }));
  };

  const handleSubmit = async () => {
    if (
      confirm(
        `선택한 시간을 면접 날짜 및 시간으로 확정하시겠습니까?\n${
          sDate.split("-")[0]
        }년 ${parseInt(sDate.split("-")[1])}월 ${parseInt(
          sDate.split("-")[2]
        )}일 ${sTime}`
      )
    ) {
      await postITVtime({
        reportId: reportID,
        interviewTimeId: selectedTimeId,
      });
      handleClose();
      window.location.reload();
    } else return;
  };

  const fetchData = async () => {
    try {
      const res = await getITVquery(reportID);
      setItvTime(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchMultipliTimes = (IST: string, IET: string) => {
    if (user) {
      let found: boolean = true;
      user.myReport.forEach((data) => {
        if (!data.interviewStartTime || !IST) return;

        if (data.interviewStartTime.split("T")[0] === IST.split("T")[0]) {
          const ISTmTime = new Date(data.interviewStartTime).getTime();
          const IETmTime = new Date(data.interviewEndTime).getTime();
          const ISTTime = new Date(IST).getTime();
          const IETTime = new Date(IET).getTime();
          if (
            (ISTTime > ISTmTime && ISTTime < IETmTime) ||
            (IETTime > ISTmTime && IETTime < IETmTime) ||
            (ISTmTime == ISTTime && IETTime == IETTime) ||
            (ISTmTime == ISTTime &&
              (IETTime < IETmTime || IETTime > IETmTime)) ||
            ((ISTmTime > ISTTime || ISTmTime < ISTTime) && IETTime == IETmTime)
          ) {
            found = false;
            return false;
          }
        }
      });
      return found;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [sDate]);

  return (
    <Container>
      <Calender>
        <Header>
          <Arrow src={LeftArrowBold} onClick={handlePrevMonth}></Arrow>
          <CurMonth>{monthNames[currentMonth]}</CurMonth>
          <Arrow src={RightArrowBold} onClick={handleNextMonth}></Arrow>
        </Header>
        <CalenderContainer>
          <Weekdays>
            <Sunday>SUN</Sunday>
            <Weekday>MON</Weekday>
            <Weekday>TUE</Weekday>
            <Weekday>WED</Weekday>
            <Weekday>THU</Weekday>
            <Weekday>FRI</Weekday>
            <Saturday>SAT</Saturday>
          </Weekdays>
          <DayContainer>{renderDays()}</DayContainer>
        </CalenderContainer>
      </Calender>
      <Database>
        <Interview>
          <InterviewD>
            <Title>면접 일자</Title>
            <Content>
              {selectedDate?.year}-
              {String(selectedDate?.month + 1).padStart(2, "0")}-
              {String(selectedDate?.date).padStart(2, "0")}
            </Content>
          </InterviewD>
          <InterviewT>
            <Title>면접 시간</Title>
            <Times>
              {itvTime &&
                itvTime.map((time) => {
                  return (
                    <>
                      {time.interviewStartTime.split("T")[0] == sDate &&
                        searchMultipliTimes(
                          time.interviewStartTime,
                          time.interviewEndTime
                        ) && (
                          <Time
                            isSelected={time.interviewTimeId == selectedTimeId}
                            onClick={() => {
                              setSelectedTimeId(time.interviewTimeId);
                              setSTime(
                                `${
                                  time.interviewStartTime
                                    .split("T")[1]
                                    .split(":")[0]
                                }:${
                                  time.interviewStartTime
                                    .split("T")[1]
                                    .split(":")[1]
                                }~${
                                  time.interviewEndTime
                                    .split("T")[1]
                                    .split(":")[0]
                                }:${
                                  time.interviewEndTime
                                    .split("T")[1]
                                    .split(":")[1]
                                }`
                              );
                            }}>
                            {
                              time.interviewStartTime
                                .split("T")[1]
                                .split(":")[0]
                            }
                            :
                            {
                              time.interviewStartTime
                                .split("T")[1]
                                .split(":")[1]
                            }{" "}
                            ~{" "}
                            {time.interviewEndTime.split("T")[1].split(":")[0]}:
                            {time.interviewEndTime.split("T")[1].split(":")[1]}
                          </Time>
                        )}
                    </>
                  );
                })}
            </Times>
          </InterviewT>
        </Interview>
        <Submit onClick={handleSubmit}>신청하기</Submit>
        <X src={Close} onClick={handleClose} />
      </Database>
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-32px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 30vh;
  left: 45vw;
  display: flex;
  width: 839px;
  height: 480px;
  border: 3px solid #e1e1e1;
  border-radius: 10px;
  padding: 32px;
  gap: 32px;
  background-color: #fff;
  user-select: none;
  animation: ${fadeIn} 0.5s;
  z-index: 1000;
`;

const X = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

const Calender = styled.div`
  display: flex;
  width: 406px;
  height: 364px;
  border: none;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
  align-items: center;
`;

const CurMonth = styled.div`
  width: auto;
  padding: 0;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
`;

const Arrow = styled.img`
  width: 9px;
  height: 16px;
  cursor: pointer;
`;

const Weekdays = styled.div`
  display: flex;
  gap: 21px;
`;

const Weekday = styled.div`
  display: flex;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: Medium;
  line-height: 16px;
  color: #000;
  width: 40px;
  height: 36px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Sunday = styled.div`
  display: flex;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: Medium;
  line-height: 16px;
  color: #ff0000;
  width: 40px;
  height: 36px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Saturday = styled.div`
  display: flex;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: Medium;
  line-height: 16px;
  color: #0000ff;
  width: 40px;
  height: 36px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Day = styled.div<{
  isSelected: boolean | null;
  isSunday: boolean;
  isSaturday: boolean;
  isntCurrent: boolean | null;
  isPrevMonth?: boolean;
  isNextMonth?: boolean;
}>`
  display: flex;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  width: 40px;
  height: 40px;
  margin-bottom: -4px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ isSelected }) => (isSelected ? "#fe4650" : "#fff")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isSelected, isSunday, isSaturday, isntCurrent }) => {
    if (isntCurrent) return "#e1e1e1";
    if (isSelected) return "#fff";
    if (isSunday) return "#ee4747";
    if (isSaturday) return "#6161ce";
    return "#000";
  }};
`;

const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
`;

const Database = styled.div`
  display: flex;
  width: 332px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;

const Interview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 23px;
`;

const InterviewD = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  gap: 8px;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  color: #000;
  line-height: 20px;
`;

const Content = styled.p`
  width: auto;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 700;
  color: #000;
  line-height: 16px;
  height: 20px;
`;

const InterviewT = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
`;

const Submit = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
  width: 119px;
  height: 29px;
  background-color: #fe4650;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const Times = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 343px;
  overflow-y: auto;
  height: 268px;
  gap: 12px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #888;
  }
`;

const Time = styled.div<{
  isSelected: boolean;
}>`
  display: flex;
  width: 159.5px;
  height: 32px;
  margin-bottom: -4px;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #eceef1;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  background-color: ${({ isSelected }) => (isSelected ? "#fe4650" : "#fff")};
  transition: color 0.2s, background-color 0.2s ease;
  &:hover {
    color: #fff;
    background-color: ${({ isSelected }) => (isSelected ? "#fe4650" : "#000")};
  }
`;

export default interviewSchedule;
