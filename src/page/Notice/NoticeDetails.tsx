import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import Check from "../../assets/img/SVG/Check.svg";
import { IVProcess } from "../../assets";
import Recruitments from "../../components/NoticePage/Recruitments";
import ScrollUpper from "../../components/MainPage/ScrollUpper";

interface Props {
  text: string;
}

const WaveText = keyframes`
  0% { transform: translateY(0); }
  50% {	transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

const Accent = keyframes`
  0% { scale: 1; }
  50% { scale: 1.033; }
  100% { scale: 1; }
`;

const Swiper: React.FC<Props> = ({ text }) => {
  const regex = /@@(.*?)@@|##(.*?)##|\$\$(.*?)\$\$|%%(.*?)%%/g;
  const replaced = text.replace(regex, (match, p1, p2, p3, p4) => {
    if (p1) return `<span class="accentRed">${p1}</span>`;
    else if (p2) return `<span class="accentYellow">${p2}</span>`;
    else if (p3) return `<span class="accentGreen">${p3}</span>`;
    else if (p4) return `<span class="accentBlue">${p4}</span>`;
    return match;
  });

  return <ReplacedText dangerouslySetInnerHTML={{ __html: replaced }} />;
};

const ReplacedText = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  letter-spacing: -0.075px;
  animation: ${WaveText} 1.5s ease-in-out infinite;
  .accentRed {
    color: #ff6065;
    font-weight: 700;
  }
  .accentYellow {
    color: #ffc705;
    font-weight: 700;
  }
  .accentGreen {
    color: #08dd85;
    font-weight: 700;
  }
  .accentBlue {
    color: #3006e5;
    font-weight: 700;
  }
`;

const NoticeDetails = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);
  const [isSelected, setIsSelected] = useState<String>("RCMinfo");
  const [clubName, setClubName] = useState<String>("대동여지도");
  const [delCheck, setDelCheck] = useState<boolean>(false);
  const clubExplain = `동아리 ##${clubName}##는 동아리원 모집과 지원에서 일어나는 번거로운 일들을 줄이고<br/>쉽고 빠르게 동아리원 %%모집%%, $$지원$$을 할 수 있는 서비스 @@${clubName}@@를 만드는 동아리입니다`;
  /* 퍼블리싱 임시 글 */
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleSelectRCMinfo = () => {
    setIsSelected("RCMinfo");
  };

  const handleSelectIDTalent = () => {
    setIsSelected("IDTalent");
  };

  const handleSelectAssignment = () => {
    setIsSelected("Assignment");
  };

  const handleModify = () => {
    window.location.href = "/NoticeModify";
  };

  const handleDelete = () => {
    window.location.href = "/";
  };

  const handleDeleting = () => {
    setDelCheck(!delCheck);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <HeaderFrame>
        <RCMinfo
          href="#Recruitment"
          selected={isSelected}
          onClick={handleSelectRCMinfo}
        >
          모집정보
        </RCMinfo>
        <IDTalent
          href="#WeWant"
          selected={isSelected}
          onClick={handleSelectIDTalent}
        >
          인재상
        </IDTalent>
        <Assign
          href="#Assignment"
          selected={isSelected}
          onClick={handleSelectAssignment}
        >
          동아리 과제
        </Assign>
      </HeaderFrame>
      <Body>
        <NoticeTop>
          <NoticeTitleBox>
            <NoticeTitle>대동여지도 동아리원을 모집합니다!!!!!</NoticeTitle>
            <IsButton>
              <ApplyButton usable={"else"}>지원하기</ApplyButton>
              <ModifyButton usable={"clubLeader"} onClick={handleModify}>
                수정하기
              </ModifyButton>
              <DeleteButton usable={"clubLeader"} onClick={handleDeleting}>
                삭제하기
              </DeleteButton>
            </IsButton>
          </NoticeTitleBox>
          <NoticeSubtitle>대동여지도's 모집정보</NoticeSubtitle>
        </NoticeTop>
        <ClubExplainBox>
          <Swiper text={clubExplain} />
        </ClubExplainBox>
        <Inbox>
          <RecruitmentBox id="Recruitment">
            <Alltitle>모집 분야</Alltitle>
            <Recruitments />
          </RecruitmentBox>
          <InterviewProcess>
            <Alltitle>면접 절차</Alltitle>
            <IVPBox>
              <IVPImg src={IVProcess} />
            </IVPBox>
          </InterviewProcess>
          <ApplyManual>
            <Alltitle>모집기간 및 지원방법</Alltitle>
            <ApplyManualContent>
              <ApplyManuals>
                <Checkbox src={Check} />
                <Contents>모집기간 : 2024-04-24 ~ 2024-05-03</Contents>
              </ApplyManuals>
              <ApplyManuals>
                <Checkbox src={Check} />
                <Contents>
                  지원방법 : 대동여지도 공고접속 후, 지원서 작성 및 과제 제출
                </Contents>
              </ApplyManuals>
              <ApplyManuals>
                <Checkbox src={Check} />
                <Contents>면접기간 : 2024-04-27 ~ 2024-05-04</Contents>
              </ApplyManuals>
            </ApplyManualContent>
          </ApplyManual>
          <WeWantAndAssignment id="WeWant">
            <Alltitle>{clubName}'s 인재상</Alltitle>
            <WWAAContent>
              보노보노를 좋아하는 사람
              <br />
              대동여지도에 대한 이해가 완벽한 사람
              <br />
              과제를 완벽히 수행한 사람
            </WWAAContent>
          </WeWantAndAssignment>
          <WeWantAndAssignment id="Assignment">
            <Alltitle>{clubName}'s 과제</Alltitle>
            <WWAAContent>
              백준 알고리즘 20개 푼 후 코드 해석해오기
              <br />
              깃 사용법에 대한 발표 준비
              <br />
              세계 최고의 검색 엔진 만들어 오기
            </WWAAContent>
          </WeWantAndAssignment>
          <Report>
            <Alltitle>문의사항</Alltitle>
            <Contents>
              instagram : @ty._.210, @rlo_zio, @wjhxxk
              <br />
              전화번호 : 010-6340-7353
              <br />
              2학년 2반 10번 원은지
            </Contents>
          </Report>
          <CCLLUUBB>{clubName}</CCLLUUBB>
        </Inbox>
      </Body>
      <Footer />
      {delCheck && (
        <>
          <BlurBack onClick={handleDeleting}></BlurBack>
          <DeleteModal>
            <ModalTop>
              <CheckText>
                삭제하시면 다시 복구할 수 없습니다.
                <br />
                진짜로 공고를 삭제하시길 원하시나요?
              </CheckText>
            </ModalTop>
            <ModalBottom>
              <DeleteCancel onClick={handleDeleting}>취소</DeleteCancel>
              <DeleteConfirm onClick={handleDelete}>삭제</DeleteConfirm>
            </ModalBottom>
          </DeleteModal>
        </>
      )}
      <ScrollUpper />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const HeaderFrame = styled.div`
  display: flex;
  padding: 10px 200px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 23px;
  position: fixed;
  top: 60px;
  background-color: #fff;
  user-select: none;
  z-index: 555;
`;

const RCMinfo = styled.a<{
  selected: String;
}>`
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  height: 15px;
  color: ${({ selected }) => (selected === "RCMinfo" ? "#000" : "#a1a4a8")};
  background-color: #fff;
  cursor: pointer;
`;

const IDTalent = styled.a<{
  selected: String;
}>`
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  height: 15px;
  color: ${({ selected }) => (selected === "IDTalent" ? "#000" : "#a1a4a8")};
  background-color: #fff;
  cursor: pointer;
`;

const Assign = styled.a<{
  selected: String;
}>`
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  height: 15px;
  color: ${({ selected }) => (selected === "Assignment" ? "#000" : "#a1a4a8")};
  background-color: #fff;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
`;

const NoticeTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
  height: 248px;
  justify-content: center;
  gap: 3px;
`;

const NoticeTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 70px;
  width: 100%;
`;

const NoticeTitle = styled.p`
  height: 50px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
`;

const NoticeSubtitle = styled.p`
  height: 30px;
  color: #86888c;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
`;

const IsButton = styled.div`
  display: flex;
  gap: 10px;
`;

const ApplyButton = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "else" ? "block" : "none")};
  width: 134px;
  height: 49px;
  border-radius: 4px;
  background-color: #52565d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  transition: scale 0.15s, box-shadow 0.2s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const ModifyButton = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "clubLeader" ? "block" : "none")};
  width: 134px;
  height: 49px;
  border-radius: 4px;
  background-color: #52565d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  transition: scale 0.15s, box-shadow 0.2s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const DeleteButton = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "clubLeader" ? "block" : "none")};
  width: 134px;
  height: 49px;
  border-radius: 4px;
  background-color: #52565d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  transition: scale 0.15s, box-shadow 0.2s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const ClubExplainBox = styled.div`
  height: 388px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fbf9fa;
`;

const Inbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 61px 200px 146px;
  justify-content: center;
  gap: 88px;
`;

const Alltitle = styled.p`
  height: 33px;
  font-family: "Spoqa Han Sans Neo";
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
`;

const RecruitmentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: relative;
  top: -100px;
  padding-top: 100px;
  margin-bottom: -63px;
`;

const InterviewProcess = styled.div`
  display: flex;
  width: 100%;
  gap: 96px;
  flex-direction: column;
  margin-bottom: 98px;
`;

const IVPBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
`;

const IVPImg = styled.img`
  width: 1200px;
  height: 120px;
`;

const ApplyManual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  margin-bottom: 19px;
`;

const ApplyManualContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ApplyManuals = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Contents = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
`;

const Checkbox = styled.img`
  width: 18px;
  height: 18px;
`;

const WeWantAndAssignment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  top: -100px;
  padding-top: 100px;
  margin-bottom: -100px;
  width: 100%;
`;

const Report = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const WWAAContent = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
  font-weight: 300;
  line-height: 28px;
`;

const CCLLUUBB = styled.p`
  display: flex;
  width: 100%;
  margin: 30px 0 75px;
  justify-content: center;
  text-align: center;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 90px;
  font-weight: 700;
  line-height: 50px;
  text-shadow: 0 10px 5px rgba(0, 0, 0, 0.3);
  animation: ${Accent} 2s ease-in-out infinite;
`;

const BlurBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 1111;
`;

const DeleteModal = styled.div`
  display: flex;
  position: fixed;
  top: 300px;
  left: 637px;
  flex-direction: column;
  width: 646px;
  height: 375px;
  border-radius: 20px;
  borderr: 2px solid #bebebe;
  background-color: #fff;
  z-index: 1112;
  user-select: none;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 289px;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid #bebebe;
`;

const CheckText = styled.p`
  color: #585858;
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

const ModalBottom = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
`;

const DeleteCancel = styled.button`
  color: #585858;
  width: 50%;
  height: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  border-radius: 0 0 0 20px;
  border-right: 0.5px solid #bebebe;
  background-color: #fff;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

const DeleteConfirm = styled.button`
  color: #ff3d3d;
  width: 50%;
  height: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  border-radius: 0 0 20px 0;
  border-left: 0.5px solid #bebebe;
  background-color: #fff;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ff3d3d;
    color: #fff;
  }
`;

export default NoticeDetails;
