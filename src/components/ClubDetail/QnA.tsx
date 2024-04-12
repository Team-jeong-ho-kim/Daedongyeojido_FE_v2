import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { QnABox } from "./QnABox";
import QnAPlus from "../../assets/img/PNG/QnAPlus.png";
import { ClubDetailType } from "../../types/type";
import { useParams } from "react-router-dom";
import { postQuest, deleteQuestion } from "../../apis/question";

type PropType = Pick<ClubDetailType, "questResponses">;

export const QnA = ({ questResponses }: PropType) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isClose, setIsClose] = useState<boolean>(false);
  const [isIn, setIsIn] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [delected, setDelected] = useState<number>(0);
  const { clubName } = useParams();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  const onSubmit = () => {
    if (!clubName) return;

    if (data === "") {
      alert("질문을 작성해주세요");
      return;
    }

    postQuest({
      question: data,
      clubName: clubName,
    })
      .then(() => {
        alert("성공적으로 완료되었습니다");
        setIsOpen(false);
      })
      .catch(() => {
        alert("나중에 다시 시도해주세요");
      });
  };

  const questionsWithAnswers = questResponses.filter((quest) => quest.answer);

  const deleteChange = (id: number) => {
    setDelected(id);
    setIsClose(true);
  };

  return (
    <Container>
      {questionsWithAnswers.length > 0 ? (
        questionsWithAnswers.map((quest, index) => {
          return (
            <QnABox
              key={index}
              quest={quest.question}
              answer={quest.answer}
              id={quest.questionId}
              deletePop={deleteChange}
            />
          );
        })
      ) : (
        <Hyeok>
          <Dae>
            Q&A가 없습니다.
            <Sang>{clubName}에 궁금한 것들을 질문해보세요.</Sang>
          </Dae>
        </Hyeok>
      )}
      {isOpen && (
        <ModalWrapper
          onClick={() => {
            if (isIn) return;
            setIsOpen(false);
          }}
        >
          <Modal
            onMouseEnter={() => {
              setIsIn(true);
            }}
            onMouseLeave={() => {
              setIsIn(false);
            }}
          >
            <ModalTitle>{clubName}에게 질문하기</ModalTitle>
            <TextArea
              placeholder="질문을 작성해주세요"
              onChange={onChange}
              value={data}
            />
            <Button onClick={onSubmit}>질문하기</Button>
          </Modal>
        </ModalWrapper>
      )}
      <PlusImg
        src={QnAPlus}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isClose && (
        <>
          <All onClick={() => setIsClose(false)}></All>
          <Diver>
            <TopDelete
              onClick={async () => {
                if (confirm("정말 해당 질문을 삭제하시겠습니까?")) {
                  await deleteQuestion(delected);
                  window.location.reload();
                }
              }}
            >
              삭제하기
            </TopDelete>
            <BotCancel onClick={() => setIsClose(false)}>취소하기</BotCancel>
          </Diver>
        </>
      )}
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-40px);
	opacity: 0.5;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5% 0px;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 500;
`;

const Modal = styled.div`
  position: fixed;
  top: calc(50% - 206.25px);
  left: calc(50% - 288px);
  width: 650px;
  height: 450px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  z-index: 501;
  animation: ${fadeIn} 0.5s;
  display: flex;
  flex-direction: column;
  padding: 52px 70px 0 70px;
  gap: 30px;
`;

const ModalTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const TextArea = styled.textarea`
  width: 512px;
  height: 200px;
  resize: none;
  border-radius: 5px;
  border: 1px #eaecef solid;
  padding: 14px 16px;
  cursor: text;
`;

const Button = styled.div`
  width: 156px;
  height: 40px;
  background-color: #333b3d;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  cursor: pointer;
`;

const PlusImg = styled.img`
  width: 55px;
  height: 55px;
  margin-left: 84%;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: invert(25%);
  }
`;

const Dae = styled.div`
  width: 600px;
  height: 350px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 21px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const Sang = styled.div`
  color: #c4c7cd;
  font-size: 12px;
  font-weight: 400;
`;

const Hyeok = styled.div`
  width: 66vw;
  display: flex;
  justify-content: center;
  padding: 50px;
  align-items: center;
`;

const All = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 1100;
`;

const Diver = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: fixed;
  top: 43vh;
  left: 43vw;
  z-index: 1111;
  animation: ${fadeIn} 0.35s;
`;

const TopDelete = styled.button`
  width: 268px;
  height: 60px;
  color: #4a4a4a;
  font-size: 25px;
  font-weight: 400;
  border-radius: 5px 5px 0 0;
  border: 0.5px solid #9d9d9d;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(70%);
  }
`;

const BotCancel = styled.button`
  width: 268px;
  height: 60px;
  color: #4a4a4a;
  font-size: 25px;
  font-weight: 400;
  border-radius: 0 0 5px 5px;
  border: 0.5px solid #9d9d9d;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(70%);
  }
`;
