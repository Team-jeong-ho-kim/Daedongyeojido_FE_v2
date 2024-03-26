import styled from "styled-components";
import { QnABox } from "./QnABox";
import QnAPlus from "../../assets/img/PNG/QnAPlus.png";
import { ClubDetailType } from "../../types/type";

type PropType = Pick<ClubDetailType, "questResponses">;

export const QnA = ({ questResponses }: PropType) => {
  return (
    <Container>
      {questResponses &&
        questResponses.map((quest, index) => {
          return (
            <QnABox key={index} quest={quest.question} answer={quest.answer} />
          );
        })}
      <PlusImg src={QnAPlus} />
    </Container>
  );
};

const Container = styled.div`
  margin-left: 17%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`;

const PlusImg = styled.img`
  width: 91px;
  height: 91px;
  margin-left: 87%;
`;
