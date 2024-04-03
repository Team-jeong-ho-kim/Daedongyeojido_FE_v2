import styled from "styled-components";
import { Back } from "../../components/Apply/Back";
import { CustomBanner } from "../../components/Apply/CustomBanner";
import Header from "../../components/Header/Header";
import { QuestionCustom } from "../../components/Apply/QuestionCustom";
import { useState } from "react";
import Footer from "../../components/MainPage/Footer";

export const CustomPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Back />
        <CustomBanner />
        <QuestionCustom />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
