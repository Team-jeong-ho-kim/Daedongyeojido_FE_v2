import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import ScrollUpper from "../../components/MainPage/ScrollUpper";
import { NoticePropsType } from "../../types/type";
import { getAllNotice } from "../../apis/notice";
import { AllQuery } from "../../components/NoticePage/AllQuery";

const NoticeAllQueryPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<NoticePropsType>();

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
      <Wrapper>
        <Header onLoginToggle={handleLoginToggle} />
        {data && <AllQuery notices={data} />}
        <Footer />
        <ScrollUpper />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  margin-top: 60px;
`;

export default NoticeAllQueryPage;
