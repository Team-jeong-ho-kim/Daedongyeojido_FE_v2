import styled from "styled-components";
import Header from "../components/Header/Header";
import { SmallHeader } from "../components/ClubMain/SmallBanner";
import { SelectBar } from "../components/ClubDetail/SelectBar";
import Footer from "../components/MainPage/Footer";
import { Clubintroduce } from "../components/ClubDetail/Clubintroduce";
import { useState } from "react";
import ClubBanner from "../assets/img/PNG/ClubBanner.png";
import { ClubMember } from "../components/ClubDetail/ClubMember";
import { QnA } from "../components/ClubDetail/QnA";

export const ClubDetailPage = () => {
  const [activeTab, setActiveTab] = useState<string>("동아리 소개");
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <SmallHeader />
        <HeaderImg src={ClubBanner} />
        <SelectBar activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === "동아리 소개" && <Clubintroduce />}
        {activeTab === "동아리원" && <ClubMember />}
        {activeTab === "QnA" && <QnA />}
        <Footer />
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
