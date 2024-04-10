import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import ClubImgEditor from "../../components/ClubMain/ClubImgEditor";
import ClubTagLoader from "../../components/ClubMain/ClubTagLoader";
import LeftArrow from "../../assets/img/PNG/LeftArrow.png";
import { getDetailClub, patchClub } from "../../apis/club";
import { ClubDetailsType, ClubInfoModType } from "../../types/type";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../apis/user";

const ClubInfoMod = () => {
  const { clubName } = useParams();
  const link = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [explain, setExplain] = useState<string>("");
  const [longExp, setLongExp] = useState<string>("");
  const [data, setData] = useState<ClubDetailsType>();
  const [tagz, setTagz] = useState<string[]>(["", "", "", "", ""]);
  const [clubBanner, setClubBanner] = useState<string>("");
  const [clubImage, setClubImage] = useState<string>("");

  useEffect(() => {
    getMyInfo().then((res) => {
      if (res.data.myClub !== clubName || res.data.part !== "CLUB_LEADER") {
        window.location.href = "/";
      }
    });
  }, []);

  useEffect(() => {
    if (clubName) {
      getDetailClub(clubName).then((res) => {
        setData(res.data);
        setClubBanner(res.data.clubBannerUrl);
        setClubImage(res.data.clubImageUrl);
        console.log(res.data);
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setExplain(data.title);
      setLongExp(data.introduction);
      setTagz([
        data.tags[0],
        data.tags[1] ? data.tags[1] : "",
        data.tags[2] ? data.tags[2] : "",
        data.tags[3] ? data.tags[3] : "",
        data.tags[4] ? data.tags[4] : "",
      ]);
      console.log(tagz);
    }
  }, [data]);

  const handleTagChange = (tag: string[]) => {
    setTagz(tag);
  };

  const handleImageChange = (url: string[]) => {
    setClubBanner(url[0]);
    setClubImage(url[1]);
  };

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

  const handleSave = () => {
    if (!clubName) return;
    let tag = tagz.filter((t) => t != "");
    Patch({
      clubName: clubName,
      title: explain,
      introduction: longExp,
      clubBannerUrl: clubBanner,
      clubImageUrl: clubImage,
      tags: tag,
    });
  };

  const Patch = (data: ClubInfoModType) => {
    console.log(data);
    patchClub(data)
      .then((res) => {
        console.log(res);
        link(`/ClubDetail/${clubName}`);
      })
      .catch((err) => {
        console.log(err);
        alert("");
      });
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <HeaderFrame>
        <GoBack onClick={() => link(`/ClubDetail/${clubName}`)}>
          <Left src={LeftArrow} />
          뒤로가기
        </GoBack>
      </HeaderFrame>
      <Box>
        <Body1>
          <ClubM>
            <SaveButton onClick={handleSave}>저장하기</SaveButton>
          </ClubM>
          <ClubN>
            <NameO>동아리 정보 수정</NameO>
            <NameP>동아리 정보를 수정해 보세요.</NameP>
          </ClubN>
        </Body1>
        {data && <ClubTagLoader club={data} tagLoad={handleTagChange} />}
        <OneLineIntro
          value={explain}
          maxLength={150}
          rows={3}
          onChange={handleIntroChange}
          placeholder="자신이 속한 동아리에 대해 짧게 설명해 주세요."
        />
        <DetailsInfo
          value={longExp}
          maxLength={500}
          rows={15}
          onChange={handleLongIntroChange}
          placeholder="자신이 속한 동아리에 대해 알려보세요! 동아리에 대한 상세 설명을 작성해 주세요."
        />
        {data && <ClubImgEditor club={data} imgLoad={handleImageChange} />}
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
  cursor: pointer;
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
  transition: filter 0.15s, scale 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(70%);
    scale: 0.9;
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
