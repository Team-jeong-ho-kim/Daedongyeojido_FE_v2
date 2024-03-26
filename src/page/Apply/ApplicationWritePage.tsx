import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Write } from "../../components/Apply/Write";
import Footer from "../../components/MainPage/Footer";
import { useEffect, useState } from "react";
import { Back } from "../../components/Apply/Back";
import { ApplicationNoticeType } from "../../types/type";
import { getApplication } from "../../apis/notice";

export const ApplicationWritePage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationNoticeType>();
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    getApplication(1).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Back />
        {data && <Write write={data} />}
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;
