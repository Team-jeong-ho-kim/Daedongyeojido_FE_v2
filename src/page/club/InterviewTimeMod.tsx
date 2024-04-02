import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import { LeftArrow } from "../../assets";
import { useState, useEffect } from "react";
import { getMyInfo } from "../../apis/user";
import { MyInfoType } from "../../types/type";
import InterviewMod from "../../components/NoticePage/InterviewMod";

const InterviewTimeMod = () => {
  const [user, setUser] = useState<MyInfoType>();
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    getMyInfo().then((res) => {
      setUser(res.data);
    });
  });

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <SubHeader>
        <Back>
          <BackArrow
            src={LeftArrow}
            onClick={() => (window.location.href = "/Notices")}
          />
          <Backer onClick={() => (window.location.href = "/Notices")}>
            뒤로가기
          </Backer>
        </Back>
      </SubHeader>
      <Body>
        <div>
          <Title>면접 시간 선택</Title>
          <Content>신입생 지원자의 면접 시간을 선택하고 수정해보세요</Content>
        </div>
        <InterviewMod clubName={user?.myClub} />
      </Body>
      ㅣ
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const SubHeader = styled.div`
  display: flex;
  position: fixed;
  top: 60px;
  left: 0;
  padding: 0 279px 0 213px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100vw;
  height: 40px;
  z-index: 900;
  user-select: none;
`;

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const BackArrow = styled.img`
  width: 6px;
  height: 12px;
  cursor: pointer;
`;

const Backer = styled.p`
  color: #4e5968;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  top: 100px;
  height: 828px;
  gap: 82px;
  padding: 82px 217px;
  margin-bottom: 100px;
`;

const Title = styled.div`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.03px;
`;

const Content = styled.div`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.014px;
`;

export default InterviewTimeMod;
