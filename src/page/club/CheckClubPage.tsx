import styled, { keyframes } from "styled-components";
import { ClubMainBanner } from "../../components/ClubMain/ClubMainBanner";
import { Club } from "../../components/ClubMain/Club";
import { SmallHeader } from "../../components/ClubMain/SmallBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import { useEffect, useState } from "react";
import { getAllClub } from "../../apis/club";
import { ClubType, ClubBannerType } from "../../types/type";
import Login from "../../components/Header/Login";

export const CheckClubPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [clubs, setClubs] = useState<ClubType[]>();
  const [banners, setBanners] = useState<ClubBannerType[]>([]);
  const [currentPage] = useState<string>("CheckClubPage");
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    getAllClub()
      .then((res) => {
        console.log(res.data);
        setBanners(res.data.banners);
        setClubs(res.data.allClubResponses);
      })
      .catch((err) => {
        console.log(err);
        alert("");
      });
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
      <Wrapper>
        <SmallHeader currentPage={currentPage} />
        {clubs && <ClubMainBanner banners={banners} />}
        <Welcome>대동여지도에서 전공동아리 활동을 도와드려요</Welcome>
        {clubs && <Club clubs={clubs} />}
      </Wrapper>
      <Footer />
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateX(-100px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
  min-height: 300px;
`;

const Welcome = styled.p`
  width: 100%;
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #363636;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  animation: ${fadeIn} 1s;
`;
