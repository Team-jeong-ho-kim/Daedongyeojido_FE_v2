import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Memo } from "../../components/Memo/Memo";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";

export const MemoPage = () => {
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
