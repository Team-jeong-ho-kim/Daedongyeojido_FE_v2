import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Write } from "../../components/Apply/Write";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";
import { Back } from "../../components/Apply/Back";

export const ApplicationWritePage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Back />
        <Top>
          <div>
            <Title>지원서 작성</Title>
            <Content>
              동아리에서 당신에 대해 궁금한 것이 많습니다. <br />
              아래 문항들에 답변하여 자기가 어떤 사람인지 알려주세요.
            </Content>
          </div>
          <Button>지원하기</Button>
        </Top>
        <Write />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Top = styled.div`
  height: 208px;
  display: flex;
  align-items: end;
  padding-bottom: 34px;
  gap: 49%;
  margin-left: 10%;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.div`
  width: 134px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  background: #52565d;
  cursor: pointer;
`;
