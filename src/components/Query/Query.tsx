import styled from "styled-components";

export const Query = () => {
  return (
    <Container>
      <CheckWrapper>
        <Check>&middot; 서류 보기</Check>
        <Check>&middot; 메모 보기</Check>
      </CheckWrapper>
      <Box>
        <Text>
          <Number>2210</Number>
          <Name>원은지</Name>
          <Major>Front-end</Major>
          <Date>면접 일시 : 3월 28일 6시 00분 ~ 6시 20분</Date>
        </Text>
        <ResultWrapper>
          <Result>서류 : 합격</Result>
          <Result>면접 : 합격</Result>
        </ResultWrapper>
      </Box>
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
