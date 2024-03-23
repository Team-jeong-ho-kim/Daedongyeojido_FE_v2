import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Query } from "../../components/Apply/Query";
import Footer from "../../components/MainPage/Footer";
import { Back } from "../../components/Apply/Back";
import { useEffect, useState } from "react";
import { ApplicationType } from "../../types/type";
import { getApplicaion } from "../../apis/report";

export const ApplicationQueryPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationType>();

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  useEffect(() => {
    getApplicaion(1).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
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
        {data && <Query info={data} />}
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
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
