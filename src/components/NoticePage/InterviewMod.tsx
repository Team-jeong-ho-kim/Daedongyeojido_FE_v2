import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import LeftArrowBold from "../../assets/img/PNG/LeftArrowBold.png";
import RightArrowBold from "../../assets/img/PNG/RightArrowBold.png";
import x from "../../assets/img/SVG/x.svg";
import { deleteITVtime, getClubITVquery } from "../../apis/interview";
import { patchITVmodify } from "../../apis/interview";
import { InterviewTimeType } from "../../types/type";
import { useNavigate, useParams } from "react-router-dom";

interface Day {
  date: number;
  month: number;
  year: number;
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

const InterviewMod = () => {
  const { clubName } = useParams();
  const link = useNavigate();
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
  const [sDate, setSDate] = useState<string>(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`
  );
  const [data, setData] = useState<InterviewTimeType[]>([]);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

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
      setSelectedDate({ date, month: currentMonth, year: currentYear });
    }
  };

  useEffect(() => {
    setSDate(
      `${selectedDate.year}-${String(selectedDate.month + 1).padStart(
        2,
        "0"
      )}-${String(selectedDate.date).padStart(2, "0")}`
    );
    console.log(selectedDate.year, selectedDate.month + 1, selectedDate.date);
  }, [selectedDate]);

  useEffect(() => {
    console.log(sDate);
  }, [sDate]);

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
            }
          >
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
          onClick={() => handleDateClick(i)}
        >
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
            onClick={() => handleDateClick(i, false, true)}
          >
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

  const handleStartIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
      }
      setStart(inputValue);
    }
  };

  const handleFocusStart = () => {
    setStart("");
  };

  const handleFocusEnd = () => {
    setEnd("");
  };

  const handleBlurStart = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue.length == 0) {
      let hour = String(new Date().getHours()).padStart(2, "0");
      let minutes = String(new Date().getMinutes()).padStart(2, "0");
      setStart(`${hour}:${minutes}`);
    } else if (inputValue.length == 1) {
      setStart(`0${inputValue}:00`);
    } else if (inputValue.length == 2) {
      if (parseInt(inputValue) < 24) {
        setStart(`${inputValue}:00`);
      } else if (parseInt(inputValue) < 60) {
        setStart(`00:${inputValue}`);
      } else {
        setStart(`0${inputValue[0]}:0${inputValue[1]}`);
      }
    } else if (inputValue.length == 3) {
      if (parseInt(inputValue) < 240) {
        setStart(`${inputValue.slice(0, 2)}:0${inputValue[2]}`);
      } else {
        let i =
          parseInt(inputValue[0]) +
          Math.floor(parseInt(inputValue.slice(1, 3)) / 60);
        let j = parseInt(inputValue.slice(1, 3)) % 60;
        setStart(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
      }
    } else {
      if (parseInt(inputValue) < 2400) {
        if (parseInt(inputValue) >= 2360) {
          let i = parseInt(inputValue.slice(2, 4)) % 60;
          setStart(`00:${i < 10 ? 0 : ""}${i}`);
        } else {
          let i =
            parseInt(inputValue.slice(0, 2)) +
            Math.floor(parseInt(inputValue.slice(2, 4)) / 60);
          let j = parseInt(inputValue.slice(2, 4)) % 60;
          setStart(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
        }
      } else {
        let inp = parseInt(inputValue) % 2400;
        if (inp >= 2360) {
          let i = (inp - 2300) % 60;
          setStart(`00:${i < 10 ? 0 : ""}${i}`);
        } else {
          let i = Math.floor(inp / 100) + Math.floor((inp % 100) / 60);
          let j = (inp % 100) % 60;
          setStart(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
        }
      }
    }
  };

  const handleEndIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
      }
      setEnd(inputValue);
    }
  };

  const handleBlurEnd = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue.length == 0) {
      let hour = String(new Date().getHours()).padStart(2, "0");
      let minutes = String(new Date().getMinutes()).padStart(2, "0");
      setEnd(`${hour}:${minutes}`);
    } else if (inputValue.length == 1) {
      setEnd(`0${inputValue}:00`);
    } else if (inputValue.length == 2) {
      if (parseInt(inputValue) <= 24) {
        setEnd(
          `${parseInt(inputValue) % 24 < 10 ? 0 : ""}${
            parseInt(inputValue) % 24
          }:00`
        );
      } else if (parseInt(inputValue) < 60) {
        setEnd(`00:${inputValue}`);
      } else {
        setEnd(`0${inputValue[0]}:0${inputValue[1]}`);
      }
    } else if (inputValue.length == 3) {
      if (parseInt(inputValue) < 240) {
        setEnd(`${inputValue.slice(0, 2)}:0${inputValue[2]}`);
      } else {
        let i =
          parseInt(inputValue[0]) +
          Math.floor(parseInt(inputValue.slice(1, 3)) / 60);
        let j = parseInt(inputValue.slice(1, 3)) % 60;
        setEnd(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
      }
    } else {
      if (parseInt(inputValue) < 2400) {
        if (parseInt(inputValue) >= 2360) {
          let i = parseInt(inputValue.slice(2, 4)) % 60;
          setEnd(`00:${i < 10 ? 0 : ""}${i}`);
        } else {
          let i =
            parseInt(inputValue.slice(0, 2)) +
            Math.floor(parseInt(inputValue.slice(2, 4)) / 60);
          let j = parseInt(inputValue.slice(2, 4)) % 60;
          setEnd(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
        }
      } else {
        let inp = parseInt(inputValue) % 2400;
        if (inp >= 2360) {
          let i = (inp - 2300) % 60;
          setEnd(`00:${i < 10 ? 0 : ""}${i}`);
        } else {
          let i = Math.floor(inp / 100) + Math.floor((inp % 100) / 60);
          let j = (inp % 100) % 60;
          setEnd(`${i < 10 ? 0 : ""}${i}:${j < 10 ? 0 : ""}${j}`);
        }
      }
    }
  };

  const handlePush = async () => {
    const newPatch = [
      ...data,
      {
        interviewStartTime: `${sDate}T${start}:00`,
        interviewEndTime: `${sDate}T${end}:00`,
      },
    ];
    console.log(newPatch);
    if (clubName) {
      await patchITVmodify(clubName, newPatch);
      fetchData();
    }
  };

  const handlePatch = () => {
    if (clubName) {
      link("/Notices");
    }
  };

  const handleDeleteTime = async (id: number) => {
    try {
      if (clubName) {
        await deleteITVtime({
          clubName: clubName,
          interviewTimeId: id,
        });
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      if (clubName) {
        const res = await getClubITVquery(clubName);
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <TimeSe>
              <StartIn
                placeholder="면접 시작 시간"
                value={start}
                onChange={handleStartIn}
                onFocus={handleFocusStart}
                onBlur={handleBlurStart}
              />
              ~
              <EndIn
                placeholder="면접 종료 시간"
                value={end}
                onChange={handleEndIn}
                onFocus={handleFocusEnd}
                onBlur={handleBlurEnd}
              />
            </TimeSe>
            <Pluss>
              <Plus isAll={start && end ? true : false} onClick={handlePush}>
                추가하기
              </Plus>
            </Pluss>
          </InterviewT>
          <Times>
            {data &&
              data.map((time) => {
                return (
                  <>
                    {time.interviewStartTime.split("T")[0] == sDate && (
                      <Time>
                        {time.interviewStartTime.split("T")[1].split(":")[0]}:
                        {time.interviewStartTime.split("T")[1].split(":")[1]} ~{" "}
                        {time.interviewEndTime.split("T")[1].split(":")[0]}:
                        {time.interviewEndTime.split("T")[1].split(":")[1]}
                        <Del
                          src={x}
                          onClick={() => {
                            handleDeleteTime(time.interviewTimeId);
                          }}
                        />
                      </Time>
                    )}
                  </>
                );
              })}
          </Times>
        </Interview>
        <Adding onClick={handlePatch}>완료하기</Adding>
      </Database>
    </Container>
  );
};

const rotate = keyframes`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(180deg);
  }
`;

const Container = styled.div`
  width: 1436px;
  height: 496px;
  display: flex;
  padding: 32px 256px 70px 190px;
  gap: 252px;
  background-color: #fff;
  user-select: none;
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

const Adding = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  width: 90px;
  height: 26px;
  background-color: #fe4650;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(70%);
  }
`;

const TimeSe = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: #645e5e;
`;

const StartIn = styled.input`
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #eceef1;
  background-color: #fff;
  width: 150px;
  height: 34px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const EndIn = styled.input`
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #eceef1;
  background-color: #fff;
  width: 150px;
  height: 34px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const Pluss = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Plus = styled.button<{
  isAll: boolean;
}>`
  width: 90px;
  height: 26px;
  border-radius: 4px;
  background-color: ${({ isAll }) => (isAll ? "#fe4650" : "#b0b0b0")};
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(${({ isAll }) => (isAll ? "70%" : "100%")});
  }
`;

const Times = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  width: 343px;
  height: 155px;
  row-gap: 8px;
  column-gap: 12px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #888;
  }
`;

const Time = styled.div`
  position: relative;
  display: flex;
  width: 159.5px;
  height: 32px;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #eceef1;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
`;

const Del = styled.img`
  width: 7px;
  height: 7px;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  &:hover {
    animation: ${rotate} 0.5s;
  }
`;

export default InterviewMod;
