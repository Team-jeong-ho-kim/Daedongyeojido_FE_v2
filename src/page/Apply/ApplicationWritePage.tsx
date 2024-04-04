import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Write } from "../../components/Apply/Write";
import Footer from "../../components/MainPage/Footer";
import { useEffect, useState } from "react";
import { Back } from "../../components/Apply/Back";
import { ApplicationNoticeType } from "../../types/type";
import { getApplication } from "../../apis/notice";
import { useParams } from "react-router-dom";
import { getMyInfo } from "../../apis/user";
import { MyInfoType } from "../../types/type";

export const ApplicationWritePage = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationNoticeType>();
  const [user, setUser] = useState<MyInfoType>();
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
  }, [id]);

  useEffect(() => {
    getMyInfo().then((res) => {
      setUser(res.data);
      if (user && data) {
        if (
          user.myReport.find((report) => report.clubName == data.classNumber)
        ) {
          //   alert("해당 공고에 대한 지원서를 작성한 기록이 남아있습니다.");
          //   link("/Notices");
          return true;
        }
      }
    });
  }, []);

  if (!id) return null;

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Back />
        {data && <Write write={data} id={id ? parseInt(id) : 0} />}
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;
