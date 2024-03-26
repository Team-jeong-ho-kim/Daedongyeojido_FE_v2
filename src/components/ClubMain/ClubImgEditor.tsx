import styled from "styled-components";
import { useState } from "react";
import Trashcan from "../../assets/img/SVG/Trashcan.svg";
import Photo from "../../assets/img/SVG/Photo.svg";

const ClubImgEditor = () => {
  const [bannerImg, setBannerImg] = useState<string | null>(null);
  const [introImg, setIntroImg] = useState<string | null>(null);

  const handleBannerUpload = () => {
    const bannerInput = document.getElementById("banner");
    bannerInput.click();
  };

  const handleBannerDelete = () => {
    const bannerInput = document.getElementById("banner");
    bannerInput.value = "";
    setBannerImg(null);
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setBannerImg(URL.createObjectURL(selectedImage));
    }
  };

  const handleIntroUpload = () => {
    const introInput = document.getElementById("introd");
    introInput.click();
  };

  const handleIntroDelete = () => {
    const introInput = document.getElementById("introd");
    introInput.value = "";
    setIntroImg(null);
  };

  const handleIntrodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setIntroImg(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <ImgSelecter>
      <BannerSelecter>
        <Delete2 src={Trashcan} onClick={handleBannerDelete} />
        <Center onClick={handleBannerUpload}>
          {!bannerImg && (
            <>
              <PhotoPlus src={Photo} />
              <Sensor>동아리 배너에 들어갈 사진을 선택해 주세요.</Sensor>
            </>
          )}
          {bannerImg && <BannerImage src={bannerImg} alt="" />}
        </Center>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="banner"
          onChange={handleBannerChange}
        />
      </BannerSelecter>
      <IntroSelecter>
        <Delete2 src={Trashcan} onClick={handleIntroDelete} />
        <Center onClick={handleIntroUpload}>
          {!introImg && (
            <>
              <PhotoPlus src={Photo} />
              <Sensor>동아리 설명에 들어갈 사진을 선택해 주세요.</Sensor>
            </>
          )}
          {introImg && <IntroImage src={introImg} alt="" />}
        </Center>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="introd"
          onChange={handleIntrodChange}
        />
      </IntroSelecter>
    </ImgSelecter>
  );
};

const ImgSelecter = styled.div`
  display: flex;
  gap: 29px;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const BannerSelecter = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 384px;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  background-color: #fafafa;
`;

const IntroSelecter = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 654px;
  height: 384px;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  background-color: #fafafa;
`;

const Delete2 = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 18px;
  right: 34px;
  cursor: pointer;
  border-radius: 40%;
  transition: filter 0.2s, background-color: 0.2s ease;
  &:hover {
	background-color: #000;
	filter: invert(100%);
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 22px;
  cursor: pointer;
`;

const PhotoPlus = styled.img`
  width: 92px;
  height: 92px;
  cursor: pointer;
`;

const Sensor = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.018px;
  cursor: pointer;
`;

const BannerImage = styled.img`
  width: 683px;
  height: 383px;
  margin-top: -21px;
`;

const IntroImage = styled.img`
  width: 654px;
  height: 368px;
  margin-top: -21px;
`;

export default ClubImgEditor;
