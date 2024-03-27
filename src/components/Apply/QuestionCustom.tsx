import styled from "styled-components";
import { useState } from "react";
import Plus from "../../assets/img/SVG/Plus.svg";
import Delete from "../../assets/img/SVG/Delete.svg";
import { addQuestion } from "../../apis/notice";
import { QuestionsType } from "../../types/type";

export const QuestionCustom = () => {
  const [NoQ, setNoQ] = useState<QuestionsType[]>([]);
  let id = 1;
  const [question, setQuestion] = useState<string>("");

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setQuestion(inputValue);
    }
  };

  const handleAddQuestion = () => {
    if (NoQ.length >= 15) {
      alert("질문은 최대 15개까지 추가할 수 있습니다.");
      NoQ.slice(15, Infinity);
      return;
    }
    NoQ.push({ id, question });
    id += 1;
    addQuestion({
      id: NoQ[NoQ.length - 1].id,
      question: NoQ[NoQ.length - 1].question,
    });
  };

  const handleDeleteQuestion = (id: number) => {
    setNoQ((prevNoQ) => prevNoQ.filter((obj) => obj.id !== id));
  };

  return (
    <Container>
      <Wrapper>
        <ContentWrappper>
          <Content>
            <b>질문을 통해 지원자에 대해 알아보세요.</b>
            <br />
            기본적으로 <b>지원자 이름</b>과 <b>학번, 자기소개</b> 내용은
            추가되어 있습니다. <br />
            <p>&#40;이 외에 질문 사항을 작성해 주세요.&#41;</p>
          </Content>
          <Count>
            <CurrentNumber>{NoQ.length}</CurrentNumber>
            <And>/</And>
            <TotalNumber>15</TotalNumber>
          </Count>
        </ContentWrappper>
        <InputWrapper>
          <Input
            placeholder="추가할 질문을 작성해주세요."
            onChange={handleQuestionChange}
          />
          <PlusIcon src={Plus} onClick={handleAddQuestion} />
        </InputWrapper>
        <CompletionWrapper>
          {NoQ &&
            NoQ.map((obj) => {
              return (
                <Completion key={obj.id}>
                  <Text>
                    <O></O>
                    <Question>{obj.question}</Question>
                  </Text>
                  <DeleteIcon
                    src={Delete}
                    onClick={() => handleDeleteQuestion(obj.id)}
                  />
                </Completion>
              );
            })}
        </CompletionWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 10.5%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1460px;
  height: 1018px;
  border-radius: 15px;
  border: 3px solid #eaecef;
  padding: 35px 59px;
`;

const ContentWrappper = styled.div`
  display: flex;
  gap: 567px;
  align-items: end;
`;

const Content = styled.p`
  color: #273440;
  font-size: 25px;
  font-weight: 500;
  p {
    color: #60646f;
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  border-radius: 30px;
  background-color: #00000080;
`;

const CurrentNumber = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const And = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const TotalNumber = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 1337px;
  height: 82px;
`;

const Input = styled.input`
  width: 1337px;
  height: 82px;
  border-radius: 10px;
  background: #f5f5f5;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.25px;
  padding: 25px 40px;
  &:hover {
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const PlusIcon = styled.img`
  position: absolute;
  top: 27px;
  right: 30px;
  width: 27px;
  height: 27px;
`;

const CompletionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 654px 654px);
  column-gap: 30px;
  row-gap: 40px;
`;

const Completion = styled.div`
  display: flex;
  justify-content: space-between;
  width: 654px;
  height: 81px;
  padding: 25px 20px;
  border-radius: 10px;
  background: #f5f5f5;
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
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.2px;
`;

const DeleteIcon = styled.img`
  width: 30px;
  height: 30px;
`;
