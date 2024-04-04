import styled from "styled-components";
import Header from "../components/Header/Header";
import { Back } from "../components/Apply/Back";
import { Club } from "../components/ClubAdmin/Club";
import { useEffect, useState } from "react";
import WhitePlus from "../assets/img/SVG/WhitePlus.svg";
import Footer from "../components/MainPage/Footer";
import { adminPageType } from "../types/type";
import { getAdmin, createClub } from "../apis/admin-club";

export const ClubAdminPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [clubName, setClubName] = useState<string>("");
  const [clubs, setClubs] = useState<adminPageType[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClubName(e.target.value);
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleOnKeyPress = () => {
    createClub(clubName)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdmin().then((res) => {
      setClubs(res.data);
    });
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <TitleWrapper>
          <Title>동아리 관리</Title>
          <ClubsBox>
            {clubs && clubs.length > 0 && <Club clubs={clubs} />}
            <PlusClubBtn>
              <Input
                type="text"
                placeholder="동아리명을 입력해주세요"
                value={clubName}
                onChange={onChange}
              />
              <PlusIcon src={WhitePlus} onClick={handleOnKeyPress} />
            </PlusClubBtn>
          </ClubsBox>
        </TitleWrapper>
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const ClubsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 1503px;
  border-radius: 10px;
  border: 3px solid #eaecef;
  padding: 50px 75px;
`;

const PlusClubBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 185px;
  height: 30px;
  border-radius: 6px;
  background-color: #52565d;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  background-color: #52565d;
  color: #ffffff;
  font-size: 14px;
  border: none;
  outline: none;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
  }
`;

const PlusIcon = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
