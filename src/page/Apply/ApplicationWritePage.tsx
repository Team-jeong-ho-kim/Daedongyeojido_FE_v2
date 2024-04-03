import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Write } from "../../components/Apply/Write";
import Footer from "../../components/MainPage/Footer";
import { useEffect, useState } from "react";
import { Back } from "../../components/Apply/Back";
import { ApplicationNoticeType } from "../../types/type";
import { getApplication } from "../../apis/notice";
import { useParams } from "react-router-dom";

export const ApplicationWritePage = () => {
  const { id } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationNoticeType>();
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    if (!id) return;

    getApplication(parseInt(id))
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("wait");
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
