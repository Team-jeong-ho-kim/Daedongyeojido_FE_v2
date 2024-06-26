import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import { SmallHeader } from "../../components/ClubMain/SmallBanner";
import { SelectBar } from "../../components/ClubDetail/SelectBar";
import Footer from "../../components/MainPage/Footer";
import { Clubintroduce } from "../../components/ClubDetail/Clubintroduce";
import { useState, useEffect } from "react";
import Banner from "../../assets/img/PNG/Banner.png";
import Daedongyeojido from "../../assets/img/PNG/Daedongyeojido.png";
import { ClubMember } from "../../components/ClubDetail/ClubMember";
import { QnA } from "../../components/ClubDetail/QnA";
import { useParams } from "react-router-dom";
import { ClubDetailType, ClubQuestionsGetType } from "../../types/type";
import { getDetailClub } from "../../apis/club";
import { getClubQuestion } from "../../apis/question";
import QuestBox from "../../components/ClubDetail/QuestBox";
import Login from "../../components/Header/Login";
import { Cookie } from "../../utils/cookie";
import { getMyInfo } from "../../apis/user";

export const ClubDetailPage = () => {
  const { clubName } = useParams();
  const accessToken = Cookie.get("accessToken");
  const [activeTab, setActiveTab] = useState<string>("동아리 소개");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ClubDetailType>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIn, setIsIn] = useState<boolean>(false);
  const [question, setQuestion] = useState<ClubQuestionsGetType[]>();
  const [currentPage] = useState<string>("ClubDetailPage");
  const [isSee, setIsSee] = useState<boolean>(false);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    if (clubName) {
      getDetailClub(clubName)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);

          alert("");
        });
    }
  }, []);

  useEffect(() => {
    if (clubName && accessToken) {
      getMyInfo().then((res) => {
        if (res.data.part === "ADMIN" || "CLUB_LEADER") {
          if (res.data.myClub === clubName) {
            getClubQuestion(clubName).then((res) => {
              setQuestion(res.data);
              console.log(res.data);
              setIsSee(true);
            });
          }
        }
      });
    }
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
      <Wrapper>
        {data && (
          <>
            <SmallHeader currentPage={currentPage} />
            <HeaderImg
              src={
                data.clubBannerUrl !== null && data.clubBannerUrl !== ""
                  ? data.clubBannerUrl
                  : Banner
              }
            />
            <SelectBar
              activeTab={activeTab}
              onTabChange={handleTabChange}
              isSee={isSee}
              onClick={() => {
                setIsOpen(true);
              }}
            />
            {activeTab === "동아리 소개" && (
              <Clubintroduce
                title={data.title}
                tags={data.tags}
                introduction={data.introduction}
                clubImageUrl={
                  data.clubImageUrl !== null && data.clubImageUrl !== ""
                    ? data.clubImageUrl
                    : Daedongyeojido
                }
                clubName={data.clubName}
              />
            )}
            {activeTab === "동아리원" && (
              <ClubMember
                clubMembers={data?.clubMembers}
                clubName={data.clubName}
              />
            )}
            {activeTab === "QnA" && (
              <QnA questResponses={data.questResponses} />
            )}
            <Footer />
            {isOpen && (
              <ModalWrapper
                onClick={() => {
                  if (isIn) return;
                  setIsOpen(false);
                }}>
                <Modal
                  onMouseEnter={() => {
                    setIsIn(true);
                  }}
                  onMouseLeave={() => {
                    setIsIn(false);
                  }}>
                  {question?.map((quest, index) => {
                    return (
                      <QuestBox
                        key={index}
                        question={quest.question}
                        questionId={quest.questionId}
                        answer={quest.answer}
                      />
                    );
                  })}
                </Modal>
              </ModalWrapper>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-40px);
	opacity: 0.5;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;

const HeaderImg = styled.img`
  width: 100vw;
  height: 18.25vw;
  overflow: hidden;
`;

const Modal = styled.div`
  position: fixed;
  top: calc(50% - 206.25px);
  left: calc(50% - 288px);
  width: 650px;
  height: 450px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  z-index: 501;
  animation: ${fadeIn} 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  overflow: auto;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 500;
`;
