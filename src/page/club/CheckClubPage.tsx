import styled from "styled-components";
import { ClubMainBanner } from "../../components/ClubMain/ClubMainBanner";
import { Club } from "../../components/ClubMain/Club";
import { SmallHeader } from "../../components/ClubMain/SmallBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";

interface HeaderProps {
  onLoginToggle: () => void;
}

export const CheckClubPage: React.FC<HeaderProps> = () => {
  const login = () => {};
  return (
    <Container>
      <Header onLoginToggle={login} />
      <Wrapper>
        <SmallHeader />
        <ClubMainBanner />
        <Welcome>대동여지도에서 전공동아리 활동을 도와드려요</Welcome>
        <Club />
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
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
`;
