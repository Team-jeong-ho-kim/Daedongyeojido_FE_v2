import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Ask } from "../../components/Ask/Ask";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";
import Login from "../../components/Header/Login";

export const AskPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
      <Wrapper>
        <Ask />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-top: 60px;
`;
