import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Memo } from "../../components/Memo/Memo";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const MemoPage = () => {
  const { id } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Memo />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 135px;
  margin-top: 60px;
`;
