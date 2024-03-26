import styled from "styled-components";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import ClubImgEditor from "../../components/ClubMain/ClubImgEditor";
import ClubTagLoader from "../../components/ClubMain/ClubTagLoader";
import { LeftArrow } from "../../assets";

const ClubInfoMod = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [explain, setExplain] = useState<string>("");
  const [longExp, setLongExp] = useState<string>("");

  const handleIntroChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const lineCount = inputValue.split("\n").length;
    if (inputValue.length <= 150 && lineCount <= 3) {
      setExplain(inputValue);
    }
  };

  const handleLongIntroChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const lineCount = inputValue.split("\n").length;
    if (inputValue.length <= 500 && lineCount <= 15) {
      setLongExp(inputValue);
    }
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <HeaderFrame>
        <GoBack>
          <Left src={LeftArrow} />
          뒤로가기
        </GoBack>
      </HeaderFrame>
      <Box>
        <Body1>
          <ClubM>
            <SaveButton>저장하기</SaveButton>
          </ClubM>
          <ClubN>
            <NameO>동아리 정보 수정</NameO>
            <NameP>동아리 정보를 수정해 보세요.</NameP>
          </ClubN>
        </Body1>
        <OneLineIntro
          value={explain}
          maxLength={150}
          rows={3}
          onChange={handleIntroChange}
          placeholder="자신이 속한 동아리에 대해 짧게 설명해 주세요."
        />
        <ClubTagLoader />
        <DetailsInfo
          value={longExp}
          maxLength={500}
          rows={15}
          onChange={handleLongIntroChange}
          placeholder="자신이 속한 동아리에 대해 알려보세요! 동아리에 대한 상세 설명을 작성해 주세요."
        />
        <ClubImgEditor />
      </Box>
      <Footer />
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

const Left = styled.img`
  width: 6px;
  height: 12px;
`;

const GoBack = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #4e5968;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
`;

const Box = styled.div`
  width: 100%;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px 270px 50px 220px;
  gap: 32px;
`;

const Body1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  user-select: none;
`;

const ClubM = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
`;

const SaveButton = styled.button`
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
  transition: scale 0.15s, box-shadow 0.2s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const ClubN = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameO = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.04px;
  height: 50px;
`;

const NameP = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02px;
  height: 25px;
`;

const OneLineIntro = styled.textarea`
  width: 100%;
  height: 104px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  font-family: "Spoqa Han Sans Neo";
  border-radius: 10px;
  background-color: #fefefe;
  overflow: hidden;
  resize: none;
  cursor: text;
  padding: 13px 15px;
  border: 3px solid #dbdbdb;
  margin-bottom: 8px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.22);
  }
  &:focus {
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.22);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const DetailsInfo = styled.textarea`
  width: 100%;
  height: 472px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  font-family: "Spoqa Han Sans Neo";
  border-radius: 10px;
  background-color: #fefefe;
  overflow: hidden;
  resize: none;
  cursor: text;
  padding: 23px 15px;
  border: 3px solid #dbdbdb;
  margin-bottom: 31px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.22);
  }
  &:focus {
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.22);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export default ClubInfoMod;
