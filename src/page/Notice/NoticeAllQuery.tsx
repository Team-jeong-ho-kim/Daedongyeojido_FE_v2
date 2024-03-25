import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import NoticeBody1 from "../../components/NoticePage/NoticeBody1";
import NoticeBody2 from "../../components/NoticePage/NoticeBody2";
import { NoticeGetType } from "../../types/type";
import { getAllNotice } from "../../apis/notice";

const NoticeAllQueryPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);
  const [data, setData] = useState<NoticeGetType[]>();

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    getAllNotice().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <NoticeBody1 />
      {data && <NoticeBody2 notices={data} />}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default NoticeAllQueryPage;
