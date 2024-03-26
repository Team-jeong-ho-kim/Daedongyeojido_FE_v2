import styled from "styled-components";
import { QnABox } from "./QnABox";
import QnAPlus from "../../assets/img/PNG/QnAPlus.png";

export const QnA = () => {
  return (
    <Container>
      <QnABox />
      <QnABox />
      <QnABox />
      <QnABox />
      <QnABox />
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
