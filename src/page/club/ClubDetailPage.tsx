import styled from "styled-components";
import Header from "../../components/Header/Header";
import { SmallHeader } from "../../components/ClubMain/SmallBanner";
import { SelectBar } from "../../components/ClubDetail/SelectBar";
import Footer from "../../components/MainPage/Footer";
import { Clubintroduce } from "../../components/ClubDetail/Clubintroduce";
import { useState, useEffect } from "react";
import ClubBanner from "../../assets/img/PNG/ClubBanner.png";
import { ClubMember } from "../../components/ClubDetail/ClubMember";
import { QnA } from "../../components/ClubDetail/QnA";
import { useParams } from "react-router-dom";
import { ClubDetailType } from "../../types/type";
import { getDetailClub } from "../../apis/club";

export const ClubDetailPage = () => {
  const { clubName } = useParams();
  const [activeTab, setActiveTab] = useState<string>("동아리 소개");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ClubDetailType>();

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    if (clubName) {
      getDetailClub(clubName).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        {data && (
          <>
            <SmallHeader />
            <HeaderImg src={ClubBanner} />
            <SelectBar activeTab={activeTab} onTabChange={handleTabChange} />
            {activeTab === "동아리 소개" && (
              <Clubintroduce
                title={data.title}
                tags={data.tags}
                introduction={data.introduction}
                clubImageUrl={data.clubImageUrl}
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
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;

const HeaderImg = styled.img`
  width: 1920px;
  height: 350px;
`;
