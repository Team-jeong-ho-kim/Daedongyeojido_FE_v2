import styled from "styled-components";
import { useState, useEffect } from "react";
import Plus from "../../assets/img/SVG/Plus.svg";
import Delete from "../../assets/img/SVG/Delete.svg";
import { addQuestion, getQuestions, deleteQuestion } from "../../apis/notice";
import { QuestionsType, CustomQuests } from "../../types/type";
import { useParams } from "react-router-dom";

export const QuestionCustom = () => {
  const [NoQ, setNoQ] = useState<CustomQuests[]>([]);
  const [YesQ, setYesQ] = useState<QuestionsType>();
  const { id } = useParams();
  const [question, setQuestion] = useState<string>("");

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setQuestion(inputValue);
    }
  };

  const handleAddQuestion = () => {
    if (question == "") {
      alert("질문을 입력해주세요.");
      return;
    }
    if (NoQ.length >= 15) {
      alert("질문은 최대 15개까지 추가할 수 있습니다.");
      NoQ.slice(15, Infinity);
      return;
    }
    setYesQ({ noticeId: id ? parseInt(id) : 0, question });
    if ({ noticeId: id ? parseInt(id) : 0, question })
      addQuestion({ noticeId: id ? parseInt(id) : 0, question })
        .then((res) => {
          console.log(res);
          setQuestion("");
          getQuestions(id ? parseInt(id) : 0).then((res) => {
            setNoQ(res.data);
            console.log(res.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleDeleteQuestion = (questId: number) => {
    deleteQuestion(questId);
    setNoQ((prevNoQ) => prevNoQ.filter((obj) => obj.id !== questId));
  };

  useEffect(() => {
    getQuestions(id ? parseInt(id) : 0).then((res) => {
      setNoQ(res.data);
      console.log(res.data);
    });
  }, [deleteQuestion]);

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
            value={question}
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
  width: 100%;
  max-width: 1220px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;
  margin-bottom: 100px;
`;

const ContentWrappper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Content = styled.p`
  color: #273440;
  font-size: 18px;
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
  width: 100%;
  height: 82px;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: #f5f5f5;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.02px;
  padding: 25px 40px;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const PlusIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 30px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CompletionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 7px;
  width: 100%;
`;

const Completion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 12px 30px;
  border-radius: 10px;
  background: #f5f5f5;
  margin-bottom: -4px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const O = styled.div`
  background-color: #000;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`;

const Question = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
`;

const DeleteIcon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
