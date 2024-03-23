import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/MainPage/Footer";
import NoticeBody1 from "../components/NoticePage/NoticeBody1";
import NoticeBody2 from "../components/NoticePage/NoticeBody2";

const NoticeAllQueryPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <NoticeBody1 />
      <NoticeBody2 />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default NoticeAllQueryPage;
