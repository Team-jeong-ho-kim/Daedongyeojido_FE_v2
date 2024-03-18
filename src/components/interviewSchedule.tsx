import styled from "styled-components";
import { useState } from "react";
import { LeftArrowBold } from "../assets";
import { RightArrowBold } from "../assets";

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

const interviewSchedule: React.FC = () => {
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
              <Time>12:30 ~ 12:50</Time>
              <Time>13:10 ~ 13:30</Time>
              <Time>13:50 ~ 14:10</Time>
              <Time>14:30 ~ 14:50</Time>
              <Time>15:10 ~ 15:30</Time>
              <Time>15:50 ~ 16:10</Time>
            </Times>
          </InterviewT>
        </Interview>
        <Sumbit>신청하기</Sumbit>
      </Database>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 839px;
  height: 480px;
  border: 3px solid #e1e1e1;
  border-radius: 10px;
  margin: 150px;
  padding: 32px;
  gap: 32px;
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
  font-family: "DXHimchanMedium";
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
  font-family: "DXHimchanMedium";
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
  font-family: "DXHimchanLight";
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
  font-family: "DXHimchanLight";
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
  width: 40px;
  height: 36px;
  margin-bottom: -1px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ isSelected }) => (isSelected ? "#000" : "#fff")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isSelected, isSunday, isSaturday, isntCurrent }) => {
    if (isntCurrent) return "#e1e1e1";
    if (isSelected) return "#fff";
    if (isSunday) return "#ff0000";
    if (isSaturday) return "#0000ff";
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
  font-family: "DXHimchanBold";
  font-size: 20px;
  font-weight: bold;
  color: #000;
  line-height: 20px;
`;

const Content = styled.p`
  width: auto;
  font-family: "DXHimchanMedium";
  font-size: 16px;
  font-weight: Medium;
  color: #000;
  line-height: 16px;
`;

const InterviewT = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
`;

const Sumbit = styled.button`
  font-family: "DXHimchanMedium";
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  width: 166px;
  height: 48px;
  background-color: #000;
  border: none;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const Times = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 12px;
`;

const Time = styled.div`
  display: flex;
  width: 160px;
  height: 32px;
  margin-bottom: -2px;
  font-family: "DXHimchanMedium";
  font-size: 16px;
  font-weight: Medium;
  line-height: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #6e6e87;
  border-radius: 5px;
`;

export default interviewSchedule;
