import { useState } from "react";
import styled from "styled-components";
import { writeProps, reportQests, MajorType } from "../../types/type";
import { WriteAPI } from "../../apis/report";
import { useNavigate } from "react-router-dom";

export const Write = ({ write }: writeProps) => {
  const navigate = useNavigate();
  const [introduceText, setIntroduceText] = useState<string>("");
  const [answers, setAnswers] = useState<reportQests[]>([]);
  const [selectedMajor, setSelectedMajor] = useState<MajorType>("BACK");

  const handleWrite = () => {
    const reportQuests = answers.map((answer: reportQests) => {
      return {
        noticeQuestId: answer.noticeQuestId,
        answer: answer.answer,
      };
    });

    WriteAPI({
      noticeId: 1,
      introduce: introduceText,
      major: selectedMajor,
      reportQuests: reportQuests,
    }).then(() => {
      navigate(`/NoticeDetails/1`);
    });
  };

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = {
      ...updatedAnswers[index],
      answer: value,
    };
    setAnswers(updatedAnswers);
  };

  const handleMajorClick = (major: MajorType) => {
    setSelectedMajor(major);
  };

  return (
    <Container>
      <Top>
        <div>
          <Title>지원서 작성</Title>
          <Content>
            동아리에서 당신에 대해 궁금한 것이 많습니다. <br />
            아래 문항들에 답변하여 자기가 어떤 사람인지 알려주세요.
          </Content>
        </div>
        <Button onClick={handleWrite}>지원하기</Button>
      </Top>
      <Wrapper>
        <IntroduceWrapper>
          <InfoWrapper>
            <Name>{write.name}</Name>
            <Number>{write.classNumber}</Number>
            <div>
              <Message>전공을 선택해주세요.</Message>
              <MajorWrapper>
                <Major
                  onClick={() => handleMajorClick("BACK")}
                  selected={selectedMajor === "BACK"}
                >
                  BackEnd
                </Major>
                <Major
                  onClick={() => handleMajorClick("FRONT")}
                  selected={selectedMajor === "FRONT"}
                >
                  FrontEnd
                </Major>
                <Major
                  onClick={() => handleMajorClick("DESIGN")}
                  selected={selectedMajor === "DESIGN"}
                >
                  Designer
                </Major>
                <Major
                  onClick={() => handleMajorClick("AND")}
                  selected={selectedMajor === "AND"}
                >
                  Andriod
                </Major>
              </MajorWrapper>
            </div>
          </InfoWrapper>
          <Introduce
            placeholder="자기소개를 작성해주세요"
            value={introduceText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setIntroduceText(e.target.value)
            }
          ></Introduce>
        </IntroduceWrapper>
        <QuestionWrapper>
          <Title>질문</Title>
          <Line></Line>
          {write.questions.map((question, index) => {
            return (
              <Q_A key={question.id}>
                <Text>
                  <O></O>
                  <Question>{question.question}</Question>
                </Text>
                <Input
                  value={answers[index]?.answer || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAnswerChange(index, e.target.value)
                  }
                />
              </Q_A>
            );
          })}
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

const Top = styled.div`
  height: 208px;
  display: flex;
  align-items: end;
  padding-bottom: 34px;
  gap: 44%;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.div`
  width: 134px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  background: #52565d;
  cursor: pointer;
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

const Message = styled.p`
  color: #64686f;
  font-size: 10px;
  font-weight: 500;
`;

const MajorWrapper = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const Major = styled.p<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#000" : "#acacac")};
  font-size: 14px;
  font-weight: 500;
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
  font-size: 30px;
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
