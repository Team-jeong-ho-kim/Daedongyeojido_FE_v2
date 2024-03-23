import { useState } from "react";
import styled from "styled-components";

export const Write = () => {
  const [introduceText, setIntroduceText] = useState<string>("");

  const handleIntroduceChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = event.target.value;
    const newText = text.replace(/\n/g, "<br/>");
    setIntroduceText(newText);
  };
  return (
    <Container>
      <Wrapper>
        <IntroduceWrapper>
          <InfoWrapper>
            <Name>워는지</Name>
            <Number>2210</Number>
          </InfoWrapper>
          <Introduce
            placeholder="자기소개를 작성해주세요"
            value={introduceText}
            onChange={handleIntroduceChange}
          ></Introduce>
        </IntroduceWrapper>
        <QuestionWrapper>
          <Title>질문</Title>
          <Line></Line>
          <Q_A>
            <Text>
              <O></O>
              <Question>아 빨리 집가고 싶다</Question>
            </Text>
            <Input></Input>
          </Q_A>
        </QuestionWrapper>
      </Wrapper>
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
  font-size: 50px;
  font-weight: 700;
`;

const Number = styled.p`
  color: #64686f;
  font-size: 30px;
  font-weight: 700;
`;

const Introduce = styled.textarea`
  width: 1351px;
  height: 391px;
  resize: none;
  padding: 35px 30px;
  border-radius: 10px;
  background: #f6f7f8;
  color: #52585c;
  font-size: 25px;
  font-weight: 500;
  & ::placeholder {
    color: #52585c;
    font-size: 25px;
    font-weight: 500;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1351px;
  border: 1px solid #eaecef;
`;

const Q_A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  font-size: 30px;
  font-weight: 400;
`;

const Input = styled.input`
  width: 1275px;
  height: 82px;
  border-radius: 10px;
  background: #f6f7f8;
  color: #52585c;
  font-size: 25px;
  font-weight: 500;
  padding: 25px 27px;
`;
