import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Query } from "../../components/Apply/Query";
import Footer from "../../components/MainPage/Footer";
import { useState } from "react";
import { Back } from "../../components/Apply/Back";

export const ApplicationQueryPage = () => {
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
            <Title>지원서 보기</Title>
            <Content>
              동아리에 관심있는 신입생 학생의 지원서 입니다.
              <br />
              아래 답변을 보고 동아리에 맞는 인재상을 찾아보세요.
            </Content>
          </div>
        </Top>
        <Query />
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
