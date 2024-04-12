import React, { useState } from "react";
import { styled } from "styled-components";
import { ClubQuestionsGetType } from "../../types/type";
import { answerQuest } from "../../apis/question";

const QuestBox = ({ questionId, question, answer }: ClubQuestionsGetType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIn, setIsIn] = useState<boolean>(false);
  const [data, setData] = useState<string>(answer ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const onClick = () => {
    answerQuest({
      answer: data,
      clubQuestId: questionId,
    })
      .then(() => {
        alert("답변에 성공하셨습니다");
        setIsOpen(false);
      })
      .catch(() => {
        alert("잠시 후 다시 시도해주세요");
      });
  };

  return (
    <QuestionBox
      isOpen={isOpen}
      onClick={() => {
        if (isIn) return;
        setIsOpen(!isOpen);
      }}
    >
      <Div>
        {question} {!!!answer && <Strong>( 답변하지 않은 질문입니다 )</Strong>}
      </Div>
      <Input
        placeholder="답변을 작성해주세요"
        onMouseEnter={() => {
          setIsIn(true);
        }}
        onMouseLeave={() => {
          setIsIn(false);
        }}
        onChange={onChange}
        disabled={!!answer}
        value={data}
      />
      {!!!answer && (
        <Button
          onClick={onClick}
          onMouseEnter={() => {
            setIsIn(true);
          }}
          onMouseLeave={() => {
            setIsIn(false);
          }}
        >
          제출
        </Button>
      )}
    </QuestionBox>
  );
};

export default QuestBox;

const QuestionBox = styled.div<{ isOpen: boolean }>`
  border: 2px #f3f4f5 solid;
  width: 600px;
  padding-left: 15px;
  padding-top: 8px;
  height: ${({ isOpen }) => (isOpen ? "auto" : "40px")};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
`;

const Div = styled.div`
  cursor: pointer;
`;

const Input = styled.input`
  max-width: 600px;
  min-height: 40px;
  padding: 10px;
  border: 1px solid #f3f4f5;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 10px;
  cursor: text;
  overflow: hidden;
`;

const Button = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background-color: black;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Strong = styled.span`
  color: red;
  cursor: pointer;
`;
