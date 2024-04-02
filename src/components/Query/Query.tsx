import styled from "styled-components";
import { ApplicantType, QueryProps, PassingResultType } from "../../types/type";

export const Query = ({ querys }: QueryProps) => {
  const reportPassingResult = (report: PassingResultType) => {
    switch (report) {
      case "PASS":
        return "합격";
      case "FAIL":
        return "탈락";
      default:
        return "대기";
    }
  };

  const interviewPassingResult = (interview: PassingResultType) => {
    switch (interview) {
      case "PASS":
        return "합격";
      case "FAIL":
        return "탈락";
      default:
        return "대기";
    }
  };
  const handleReportView = (reportId: number) => {
    console.log(reportId);
    window.location.href = `/ApplicationQuery/${reportId}`;
  };

  const handleMemoView = (reportId: number) => {
    console.log(reportId);
    window.location.href = `/Memo/${reportId}`;
  };

  return (
    <Container>
      {querys.map((query: ApplicantType, index: number) => (
        <>
          <CheckWrapper>
            <Check onClick={() => handleReportView(query.reportId)}>
              &middot; 서류 보기
            </Check>
            <Check onClick={() => handleMemoView(query.reportId)}>
              &middot; 메모 보기
            </Check>
          </CheckWrapper>
          <Box key={index}>
            <Text>
              <Number>{query.classNumber}</Number>
              <Name>{query.name}</Name>
              <Major>{query.hopeMajor}</Major>
              <Date>
                면접 일시 : {query.interviewStartTime} ~{query.interviewEndTime}
              </Date>
            </Text>
            <ResultWrapper>
              <Result>
                서류 : {reportPassingResult(query.reportPassingResult)}
              </Result>
              <Result>
                면접 : {interviewPassingResult(query.interviewPassingResult)}
              </Result>
            </ResultWrapper>
          </Box>
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 401px;
  height: 194px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Check = styled.p`
  color: #626262;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 38px 40px;
  width: 401px;
  height: 170px;
  border-radius: 10px;
  border: 2px solid #cdd1d6;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Number = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 700;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Major = styled.p`
  color: #626262;
  font-size: 20px;
  font-weight: 700;
`;

const Date = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 700;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Result = styled.p`
  color: #626262;
  font-size: 12px;
  font-weight: 700;
`;
