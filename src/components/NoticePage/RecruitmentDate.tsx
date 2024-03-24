import styled from "styled-components";
import { useState } from "react";
import LeftArrowBold from "../../assets/img/PNG/LeftArrowBold.png";
import RightArrowBold from "../../assets/img/PNG/RightArrowBold.png";

interface Day {
  date: number;
  month: number;
  year: number;
}

interface Props {
  RSM: Day;
  REM: Day;
  setRSM: React.Dispatch<React.SetStateAction<Day>>;
  setREM: React.Dispatch<React.SetStateAction<Day>>;
  RecruStart: string | null;
  RecruEnd: string | null;
  setRecruStart: React.Dispatch<React.SetStateAction<string | null>>;
  setRecruEnd: React.Dispatch<React.SetStateAction<string | null>>;
  toggle: () => void;
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

const RecruitmentDate: React.FC<Props> = ({
  RSM,
  REM,
  setREM,
  setRSM,
  RecruStart,
  RecruEnd,
  setRecruStart,
  setRecruEnd,
  toggle,
}) => {
  const [selectedDate1, setSelectedDate1] = useState<Day>(RSM);
  const [selectedDate2, setSelectedDate2] = useState<Day>(REM);
  const [currentMonth1, setCurrentMonth1] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear1, setCurrentYear1] = useState<number>(
    new Date().getFullYear()
  );
  const [currentMonth2, setCurrentMonth2] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear2, setCurrentYear2] = useState<number>(
    new Date().getFullYear()
  );

  const handleDate1Click = (
    date: number,
    isPrevMonth?: boolean,
    isNextMonth?: boolean
  ) => {
    if (
      selectedDate1.month == selectedDate2.month &&
      date > selectedDate2.date
    ) {
      if (isPrevMonth) {
        if (currentMonth1 == 0) {
          setCurrentMonth1((prevMonth) =>
            prevMonth === 0 ? 11 : prevMonth - 1
          );
          setCurrentYear1((prevYear) =>
            currentMonth1 === 0 ? prevYear - 1 : prevYear
          );
        } else {
          setCurrentMonth1(currentMonth1 - 1);
          setSelectedDate1({ date, month: currentMonth1, year: currentYear1 });
        }
      }
      return;
    }
    if (isPrevMonth) {
      if (currentMonth1 == 0) {
        setCurrentMonth1((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrentYear1((prevYear) =>
          currentMonth1 === 0 ? prevYear - 1 : prevYear
        );
      } else {
        setCurrentMonth1(currentMonth1 - 1);
      }
    } else if (isNextMonth) {
      if (
        (selectedDate1.year <= selectedDate2.year &&
          selectedDate1.month + 1 == selectedDate2.month &&
          selectedDate1.date > selectedDate2.date) ||
        (selectedDate1.month == selectedDate2.month &&
          selectedDate1.date == selectedDate2.date)
      )
        return;
      if (currentMonth1 == 11) {
        setCurrentMonth1((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrentYear1((prevYear) =>
          currentMonth1 === 11 ? prevYear + 1 : prevYear
        );
      } else {
        setCurrentMonth1(currentMonth1 + 1);
      }
    }
    setSelectedDate1({ date, month: currentMonth1, year: currentYear1 });
  };

  const handleDate2Click = (
    date: number,
    isPrevMonth?: boolean,
    isNextMonth?: boolean
  ) => {
    if (selectedDate1.month == selectedDate2.month && date < selectedDate1.date)
      return;
    if (isPrevMonth) {
      if (
        selectedDate1.year <= selectedDate2.year &&
        selectedDate1.month + 1 == selectedDate2.month
      )
        return;
      setCurrentMonth2((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
      setCurrentYear2((prevYear) =>
        currentMonth2 === 0 ? prevYear - 1 : prevYear
      );
    } else if (isNextMonth) {
      setCurrentMonth2((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
      setCurrentYear2((prevYear) =>
        currentMonth2 === 11 ? prevYear + 1 : prevYear
      );
    } else {
      setSelectedDate2({ date, month: currentMonth2, year: currentYear2 });
    }
  };

  const renderDays1 = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays = daysInMonth(currentMonth1, currentYear1);
    const firstDayIndex = firstDayOfMonth(currentMonth1, currentYear1);
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
              handleDate1Click(
                daysInMonth(
                  currentMonth1 === 0 ? 11 : currentMonth1 - 1,
                  currentMonth1 === 0 ? currentYear1 - 1 : currentYear1
                ) -
                  i +
                  1,
                true
              )
            }
          >
            {daysInMonth(
              currentMonth1 === 0 ? 11 : currentMonth1 - 1,
              currentMonth1 === 0 ? currentYear1 - 1 : currentYear1
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
      const isSelected = selectedDate1 && selectedDate1.date === i;

      days.push(
        <Day
          key={i}
          isntCurrent={false}
          isSunday={isSunday}
          isSaturday={isSaturday}
          isSelected={isSelected}
          onClick={() => handleDate1Click(i)}
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
            onClick={() => handleDate1Click(i, false, true)}
          >
            {i}
          </Day>
        );
      }
    }

    return days;
  };

  const renderDays2 = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays = daysInMonth(currentMonth2, currentYear2);
    const firstDayIndex = firstDayOfMonth(currentMonth2, currentYear2);
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
              handleDate2Click(
                daysInMonth(
                  currentMonth2 === 0 ? 11 : currentMonth2 - 1,
                  currentMonth2 === 0 ? currentYear2 - 1 : currentYear2
                ) -
                  i +
                  1,
                true
              )
            }
          >
            {daysInMonth(
              currentMonth2 === 0 ? 11 : currentMonth2 - 1,
              currentMonth2 === 0 ? currentYear2 - 1 : currentYear2
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
      const isSelected = selectedDate2 && selectedDate2.date === i;

      days.push(
        <Day
          key={i}
          isntCurrent={false}
          isSunday={isSunday}
          isSaturday={isSaturday}
          isSelected={isSelected}
          onClick={() => handleDate2Click(i)}
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
            onClick={() => handleDate2Click(i, false, true)}
          >
            {i}
          </Day>
        );
      }
    }

    return days;
  };

  const handlePrevMonth1 = () => {
    setCurrentMonth1((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear1((prevYear) =>
      currentMonth1 === 0 ? prevYear - 1 : prevYear
    );
    setSelectedDate1((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 0 ? prevDate.year - 1 : prevDate.year,
      month: prevDate.month === 0 ? 11 : prevDate.month - 1,
    }));
  };

  const handleNextMonth1 = () => {
    if (selectedDate1.year > selectedDate2.year) return;
    else if (
      selectedDate1.year == selectedDate2.year &&
      selectedDate1.month >= selectedDate2.month
    )
      return;
    else if (
      selectedDate1.month > selectedDate2.month &&
      selectedDate1.date >= selectedDate2.date
    )
      return;
    else if (
      selectedDate1.month + 1 == selectedDate2.month &&
      selectedDate1.date > selectedDate2.date
    )
      return;
    setCurrentMonth1((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear1((prevYear) =>
      currentMonth1 === 11 ? prevYear + 1 : prevYear
    );
    setSelectedDate1((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 11 ? prevDate.year + 1 : prevDate.year,
      month: prevDate.month === 11 ? 0 : prevDate.month + 1,
    }));
  };

  const handlePrevMonth2 = () => {
    if (selectedDate1.year > selectedDate2.year) return;
    else if (selectedDate1.month >= selectedDate2.month) return;
    else if (
      selectedDate1.month > selectedDate2.month &&
      selectedDate1.date >= selectedDate2.date
    )
      return;
    setCurrentMonth2((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear2((prevYear) =>
      currentMonth2 === 0 ? prevYear - 1 : prevYear
    );
    setSelectedDate2((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 0 ? prevDate.year - 1 : prevDate.year,
      month: prevDate.month === 0 ? 11 : prevDate.month - 1,
    }));
  };

  const handleNextMonth2 = () => {
    setCurrentMonth2((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear2((prevYear) =>
      currentMonth2 === 11 ? prevYear + 1 : prevYear
    );
    setSelectedDate2((prevDate) => ({
      ...prevDate,
      year: prevDate.month === 11 ? prevDate.year + 1 : prevDate.year,
      month: prevDate.month === 11 ? 0 : prevDate.month + 1,
    }));
  };

  const handleSave = () => {
    if (
      selectedDate1.year <= new Date().getFullYear() &&
      selectedDate1.month <= new Date().getMonth() &&
      selectedDate1.date < new Date().getDate()
    ) {
      alert("시작 날짜를 오늘 날짜보다 빠르게 둘 수 없습니다.");
      return;
    } else if (selectedDate1.year > selectedDate2.year) {
      alert("시작 날짜를 종료 날짜보다 늦게 둘 수 없습니다.");
      return;
    } else if (selectedDate1.month > selectedDate2.month) {
      alert("시작 날짜를 종료 날짜보다 늦게 둘 수 없습니다.");
      return;
    } else if (selectedDate1.date > selectedDate2.date) {
      alert("시작 날짜를 종료 날짜보다 늦게 둘 수 없습니다.");
      return;
    }
    const formattedStartDate = `${selectedDate1.year}-${String(
      selectedDate1.month + 1
    ).padStart(2, "0")}-${String(selectedDate1.date).padStart(2, "0")}`;
    const formattedEndDate = `${selectedDate2.year}-${String(
      selectedDate2.month + 1
    ).padStart(2, "0")}-${String(selectedDate2.date).padStart(2, "0")}`;
    setRecruStart(formattedStartDate);
    setRecruEnd(formattedEndDate);
    setRSM(selectedDate1);
    setREM(selectedDate2);
    toggle();
  };

  const handleCancel = () => {
    if (confirm("취소하시겠습니까?")) {
      if (!RecruStart) {
        setRecruStart(
          `${selectedDate1.year}-${String(selectedDate1.month + 1).padStart(
            2,
            "0"
          )}-${String(selectedDate1.date).padStart(2, "0")}`
        );
      }
      if (!RecruEnd) {
        setRecruEnd(
          `${selectedDate2.year}-${String(selectedDate2.month + 1).padStart(
            2,
            "0"
          )}-${String(selectedDate2.date).padStart(2, "0")}`
        );
      }
      toggle();
    }
  };

  return (
    <Container>
      <Calender>
        <Header>
          <Arrow src={LeftArrowBold} onClick={handlePrevMonth1} />
          <CurMonth>{monthNames[currentMonth1]}</CurMonth>
          <Arrow src={RightArrowBold} onClick={handleNextMonth1} />
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
          <DayContainer>{renderDays1()}</DayContainer>
        </CalenderContainer>
      </Calender>
      <Database>
        <Recruit>
          <RecruitD>
            <Title>면접 기간</Title>
            <Content>
              시작일 ~ 종료일
              <br />
              {selectedDate1?.year}-
              {String(selectedDate1?.month + 1).padStart(2, "0")}-
              {String(selectedDate1?.date).padStart(2, "0")} ~{" "}
              {selectedDate2?.year}-
              {String(selectedDate2?.month + 1).padStart(2, "0")}-
              {String(selectedDate2?.date).padStart(2, "0")}
            </Content>
          </RecruitD>
          <Cancel onClick={handleCancel}>취소</Cancel>
          <Submit onClick={handleSave}>적용</Submit>
        </Recruit>
      </Database>
      <Calender>
        <Header>
          <Arrow src={LeftArrowBold} onClick={handlePrevMonth2} />
          <CurMonth>{monthNames[currentMonth2]}</CurMonth>
          <Arrow src={RightArrowBold} onClick={handleNextMonth2} />
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
          <DayContainer>{renderDays2()}</DayContainer>
        </CalenderContainer>
      </Calender>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 26%;
  left: 20.24%;
  height: 480px;
  border: 3px solid #e1e1e1;
  border-radius: 10px;
  padding: 32px;
  gap: 32px;
  background-color: #fff;
  user-select: none;
  z-index: 1200;
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
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

const Recruit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  height: auto;
  gap: 40px;
  margin-bottom: 40px;
`;

const RecruitD = styled.div`
  display: flex;
  width: 100%;
  gap: 38px;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-size: 40px;
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
  line-height: normal;
  height: 20px;
`;

const Submit = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
  width: 100%;
  height: 29px;
  background-color: #fe4650;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: scale 0.2s;
  &:hover {
    scale: 1.1;
  }
`;

const Cancel = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
  width: 100%;
  height: 29px;
  background-color: #cdcdcd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: -35px;
  transition: scale 0.2s;
  &:hover {
    scale: 1.1;
  }
`;

export default RecruitmentDate;
