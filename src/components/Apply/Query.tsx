import styled from "styled-components";
import { InfoProps } from "../../types/type";

export const Query = ({ info }: InfoProps) => {
  return (
    <Container>
      {info && (
        <Wrapper>
          <IntroduceWrapper>
            <InfoWrapper>
              <Name>{info.name}</Name>
              <Number>{info.classNumber}</Number>
            </InfoWrapper>
            <Introduce>
              <IntroduceLine></IntroduceLine>
              <IntroduceText>{info.introduce}</IntroduceText>
            </Introduce>
          </IntroduceWrapper>
          <QuestionWrapper>
            <Title>질문</Title>
            <Line></Line>
            {info.noticeQuests.map((qa) => {
              return (
                <Q_A key={qa.answer}>
                  <Text>
                    <O></O>
                    <Question>{qa.question}</Question>
                  </Text>
                  <Input>{qa.answer}</Input>
                </Q_A>
              );
            })}
          </QuestionWrapper>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1832px;
  margin-left: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 114px;
  width: 1462px;
  height: auto;
  border-radius: 10px;
  border: 3px solid #eaecef;
  padding: 60px 55px;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 11px;
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const Number = styled.p`
  color: #64686f;
  font-size: 14px;
  font-weight: 700;
`;

const Introduce = styled.div`
  width: 1351px;
  height: 391px;
  display: flex;
  gap: 15px;
`;

const IntroduceLine = styled.div`
  width: 5px;
  height: 280px;
  background: #626c7b;
`;

const IntroduceText = styled.p`
  color: #52585c;
  font-size: 20px;
  font-weight: 500;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1351px;
  border: 1px solid #eaecef;
`;

const Q_A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const O = styled.div`
  background-color: #000;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const Question = styled.p`
  font-size: 26px;
  font-weight: 400;
`;

const Input = styled.p`
  color: #52585c;
  font-size: 22px;
  font-weight: 500;
  padding-left: 20px;
`;
