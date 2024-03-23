import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Leverie } from "../../components/Leverie/Leverie";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";

export const LeveriePage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Leverie />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;
