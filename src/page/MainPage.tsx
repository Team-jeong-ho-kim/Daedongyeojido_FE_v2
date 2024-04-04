import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/MainPage/Footer";
import Login from "../components/Header/Login";
import { Conveyor } from "../components/MainPage/Conveyor";
import Anything from "../assets/img/SVG/Anything.svg";
import Macbook2 from "../assets/img/SVG/MacBook2.svg";
import Quest from "../assets/img/SVG/Quest.svg";
import Apply from "../assets/img/SVG/Apply.svg";
import Calendar from "../assets/img/SVG/Calendar.svg";
import { ScrollBox } from "../components/MainPage/ScrollBox";

const Mainpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
      <FirstContainer>
        <MainTitle>
          동아리의 모든 것<br />
          대동여지도에서 쉽고 간편하게
        </MainTitle>
        <Conveyor />
      </FirstContainer>
      <ContainerBackground>
        <ScrollBox>
          <SecondContainer>
            대덕소프트웨어마이스터고등학교의 전공동아리들을
            <br />
            한눈에 조회하고 한 곳에서 관리하세요.
            <br />
            <span>이제껏 경험 못 했던 쉽고 편리한 전공동아리 서비스,</span>
            대동여지도와 함께라면 당신의 전공동아리가 새로워질 거예요.
          </SecondContainer>
        </ScrollBox>
      </ContainerBackground>
      <ScrollBox>
        <ThirdContainer>
          <div>
            전공동아리
            <br />
            <span>관리의 모든 것</span>
            하나로 관리하다
          </div>
          <img src={Anything} />
        </ThirdContainer>
      </ScrollBox>
      <ScrollBox>
        <FourthContainer>
          <div>
            <span>등록 · 생성</span>
            동아리 관리,
            <br />
            등록부터 생성까지
            <br />
            간편하게
          </div>
          <img src={Macbook2} />
        </FourthContainer>
      </ScrollBox>
      <ContainerBackground>
        <ScrollBox>
          <FifthContainer>
            <TextContainer>
              <div>쉽고 빠른 정보 제공</div>
              <div>
                전공동아리에 대한
                <br />
                궁금증을 해결해보세요
              </div>
              <div>
                동아리 정보와 QnA로 인해
                <br />
                아리 관련 궁금증을 해결할 수 있어요
              </div>
            </TextContainer>
            <img src={Quest} />
          </FifthContainer>
        </ScrollBox>
      </ContainerBackground>
      <ContainerBackground>
        <ScrollBox>
          <SixthContainer>
            <img src={Apply} />
            <TextContainer>
              <div>지원 관리</div>
              <div>
                전공 동아리 지원 내역을
                <br />한 눈에 확인해보세요.
              </div>
              <div>
                마이페이지에서 자신이 지원한
                <br />
                전공동아리를 쉽고 간편하게 확인할 수 있어요
              </div>
            </TextContainer>
          </SixthContainer>
        </ScrollBox>
      </ContainerBackground>
      <ScrollBox>
        <SeventhContainer>
          <TextContainer>
            <div>우리의 시간은 소중하니까</div>
            <div>
              복잡하고 귀찮은
              <br />
              일들과 작별해보세요
            </div>
            <div>
              큐알 코드가 붙은 포스터, 동아리 정보들
              <br />
              면접 일정 관리, 공지, 합격 결과 알리기
              <br />
              <br />
              대동여지도와 함께라면 더이상 번거롭지 않아요
            </div>
          </TextContainer>
          <img src={Calendar} />
        </SeventhContainer>
      </ScrollBox>
      <Footer />
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	opacity: 0;
  }
  100% {
	opacity: 1;
  }
`;

const ContainerBackground = styled.div`
  background-color: #fbf9fa;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1200px;
  align-items: center;
  padding-top: 200px;
  animation: ${fadeIn} 1s;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 92.36%,
      rgba(0, 0, 0, 0.08) 104.83%
    ),
    linear-gradient(
      180deg,
      rgba(234, 74, 70, 0) 20.1%,
      rgba(234, 74, 70, 0.1) 100%
    ),
    #fff;
`;

const SecondContainer = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  > span {
    color: #ff4a50;
  }
`;

const ThirdContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  > div {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > span {
      color: #ff4a50;
    }
  }
  > img {
    height: 500px;
  }
`;

const FourthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  > div {
    width: 800px;
    font-size: 40px;
    font-weight: 700;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > span {
      color: #ff4a50;
      font-size: 20px;
      font-weight: 700;
    }
  }
  > img {
    height: 500px;
  }
`;

const FifthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

const SixthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

const SeventhContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

const MainTitle = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const TextContainer = styled.div`
  > div:nth-child(1) {
    color: #ff4a50;
    font-size: 20px;
    font-weight: 700;
  }
  > div:nth-child(2) {
    color: #524d4e;
    font-size: 36px;
    font-weight: 700;
  }
  > div:nth-child(3) {
    color: #6c6768;
    font-size: 24px;
    font-weight: 600;
  }
`;

export default Mainpage;
