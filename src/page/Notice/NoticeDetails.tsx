import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import Check from "../../assets/img/SVG/Check.svg";
import IVProcess from "../../assets/img/PNG/IVProcess.png";
import Recruitments from "../../components/NoticePage/Recruitments";
import ScrollUpper from "../../components/MainPage/ScrollUpper";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNotice, getDetailNotice } from "../../apis/notice";
import { MyInfoType } from "../../types/type";
import { getMyInfo } from "../../apis/user";
import { MemoEditType, NoticeDetailType } from "../../types/type";
import { Memo } from "../../components/Memo/Memo";
import Login from "../../components/Header/Login";

interface Props {
  text: string;
}

const WaveText = keyframes`
  0% { transform: translateY(0); }
  50% {	transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

const Replacing = (str: string) => {
  const returnStr = str.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));

  return returnStr;
};

const Swiper: React.FC<Props> = ({ text }) => {
  const regex = /@@(.*?)@@|##(.*?)##|\$\$(.*?)\$\$|%%(.*?)%%/g;
  let replaced = text.replace(regex, (match, p1, p2, p3, p4) => {
    if (p1) return `<span class="accentRed">${p1}</span>`;
    else if (p2) return `<span class="accentYellow">${p2}</span>`;
    else if (p3) return `<span class="accentGreen">${p3}</span>`;
    else if (p4) return `<span class="accentBlue">${p4}</span>`;
    return match;
  });

  const liter = replaced.split("\n").map((line, index) => (
    <NoDiv key={index}>
      <ReplacedText dangerouslySetInnerHTML={{ __html: line }} />
    </NoDiv>
  ));
  console.log(liter);

  return liter;
};

const NoDiv = styled.div`
  height: 28.8px;
`;

const ReplacedText = styled.p`
  font-size: 20px;
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
  const link = useNavigate();
  const { id } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>("RCMinfo");
  const [delCheck, setDelCheck] = useState<boolean>(false);
  const [data, setData] = useState<NoticeDetailType>();
  const [user, setUser] = useState<MyInfoType>();
  const [updatedMemo] = useState<MemoEditType>();
  const [aReportId, setAReportId] = useState<boolean>(false);

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

  const handleDelete = () => {
    if (!id) return;

    deleteNotice(id)
      .then(() => {
        alert("공고가 삭제되었습니다");
        window.location.href = "/";
      })
      .catch(() => {
        alert("나중에 다시 시도해주세요");
      });
  };

  const handleDeleting = () => {
    setDelCheck(!delCheck);
  };

  useEffect(() => {
    if (id) {
      getDetailNotice(+id).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
    getMyInfo().then((res) => {
      setUser(res.data);
      if (user && data) {
        if (user.myReport.find((report) => report.clubName == data.clubName)) {
          setAReportId(true);
        } else setAReportId(false);
        console.log(aReportId);
      }
    });
  }, []);

  return (
    <Container>
      {data && (
        <>
          <Header onLoginToggle={handleLoginToggle} />
          {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
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
                <NoticeTitle>{data.noticeTitle}</NoticeTitle>
                <IsButton>
                  <ApplyButton
                    usable={
                      user?.part == "INDEPENDENT" && !aReportId ? "else" : "as"
                    }
                    onClick={() => {
                      link(`/ApplicationWrite/${id}`);
                    }}
                  >
                    지원하기
                  </ApplyButton>
                  <Done usable={aReportId ? "applyer" : "else"}>
                    서류제출완료
                  </Done>
                  <ModifyButton
                    usable={
                      user?.part == "CLUB_LEADER" || user?.part == "ADMIN"
                        ? "clubLeader"
                        : "else"
                    }
                    onClick={() => {
                      link(`/NoticeModify/${user?.myClub}/${id}`);
                    }}
                  >
                    수정하기
                  </ModifyButton>
                  <DeleteButton
                    usable={
                      user?.part == "CLUB_LEADER" || user?.part == "ADMIN"
                        ? "clubLeader"
                        : "else"
                    }
                    onClick={handleDeleting}
                  >
                    삭제하기
                  </DeleteButton>
                </IsButton>
              </NoticeTitleBox>
              <NoticeSubtitle>{data.noticeExplain}</NoticeSubtitle>
            </NoticeTop>
            <ClubExplainBox>
              <Swiper text={data.clubExplain} />
            </ClubExplainBox>
            <Inbox>
              <RecruitmentBox id="Recruitment">
                <Alltitle>모집 분야</Alltitle>
                <Recruitments fields={data.fields} />
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
                    <Contents>
                      모집기간 : {data.recruitDay.startDay} ~{" "}
                      {data.recruitDay.endDay}
                    </Contents>
                  </ApplyManuals>
                  <ApplyManuals>
                    <Checkbox src={Check} />
                    <Contents>지원방법 : {data.applyMethod}</Contents>
                  </ApplyManuals>
                  <ApplyManuals>
                    <Checkbox src={Check} />
                    <Contents>
                      면접기간 : {data.interviewDay.startDay} ~{" "}
                      {data.interviewDay.endDay}
                    </Contents>
                  </ApplyManuals>
                </ApplyManualContent>
              </ApplyManual>
              <WeWantAndAssignment id="WeWant">
                <Alltitle>{data.clubName}'s 인재상</Alltitle>
                <WWAAContent>{Replacing(data.weWant)}</WWAAContent>
              </WeWantAndAssignment>
              <WeWantAndAssignment id="Assignment">
                <Alltitle>{data.clubName}'s 과제</Alltitle>
                <WWAAContent>{Replacing(data.assignment)}</WWAAContent>
              </WeWantAndAssignment>
              <Report>
                <Alltitle>문의사항</Alltitle>
                <Contents>{Replacing(data.inquiry)}</Contents>
              </Report>
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
        </>
      )}
      {updatedMemo && <Memo reportId={updatedMemo?.reportId} />}
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
  selected: string;
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
  selected: string;
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
  selected: string;
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
  padding-bottom: 150px;
`;

const NoticeTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 300px;
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
  height: 48px;
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
`;

const NoticeSubtitle = styled.p`
  height: 42px;
  color: #86888c;
  font-size: 20px;
  font-weight: 500;
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
  &:active {
    scale: 0.9;
  }
`;

const Done = styled.div<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "applyer" ? "flex" : "none")};
  width: 180px;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #b5b5b5;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
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
  &:active {
    scale: 0.9;
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
  &:active {
    scale: 0.9;
  }
`;

const ClubExplainBox = styled.div`
  height: 488px;
  display: flex;
  flex-direction: column;x
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
  padding: 61px 300px 146px;
  justify-content: center;
  gap: 88px;
`;

const Alltitle = styled.p`
  height: 33px;
  font-size: 20px;
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
  width: 100%;
  height: 100%;
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
  font-size: 22px;
  font-weight: 300;
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
  border: 2px solid #bebebe;
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
