import styled from "styled-components";
import { useState, useEffect } from "react";
import Trashcan from "../../assets/img/SVG/Trashcan.svg";
import Photo from "../../assets/img/SVG/Photo.svg";
import { ClubDetailsType } from "../../types/type";
import { handleImageChange } from "../../utils/handleImageChange";
import { createImage } from "../../apis/image";

interface Update {
  club: ClubDetailsType;
  imgLoad: (data: string[]) => void;
}

const ClubImgEditor: React.FC<Update> = ({ club, imgLoad }) => {
  const [bannerImg, setBannerImg] = useState<Blob | null>();
  const [introImg, setIntroImg] = useState<Blob | null>();
  const [reBanner, setReBenner] = useState<string>(club.clubBannerUrl);
  const [reIntro, setReIntro] = useState<string>(club.clubImageUrl);

  const handleBannerUpload = () => {
    const bannerInput: HTMLElement | null = document.getElementById("banner");
    if (bannerInput) bannerInput.click();
  };

  const handleBannerDelete = () => {
    const bannerInput: HTMLElement | null | any =
      document.getElementById("banner");
    if (bannerInput) bannerInput.value = "";
    setBannerImg(null);
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(e, setBannerImg);
  };

  const handleIntroUpload = () => {
    const introInput: HTMLElement | null = document.getElementById("introd");
    if (introInput) introInput.click();
  };

  const handleIntroDelete = () => {
    const introInput: HTMLElement | null | any =
      document.getElementById("introd");
    if (introInput) introInput.value = "";
    setIntroImg(null);
  };

  const handleIntrodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(e, setIntroImg);
  };

  useEffect(() => {
    if (!bannerImg) return;
    createImage(bannerImg).then((res) => {
      imgLoad([res.data.imageUrl, reIntro]);
      setReBenner(res.data.imageUrl);
    });
  }, [bannerImg]);

  useEffect(() => {
    if (!introImg) return;
    createImage(introImg).then((res) => {
      imgLoad([reBanner, res.data.imageUrl]);
      setReIntro(res.data.imageUrl);
    });
  }, [introImg]);

  return (
    <ImgSelecter>
      <BannerSelecter>
        <Delete2 src={Trashcan} onClick={handleBannerDelete} />
        <Center onClick={handleBannerUpload}>
          {!bannerImg && (
            <>
              <PhotoPlus src={Photo} />
              <Sensor>동아리 배너에 들어갈 사진을 선택해 주세요.</Sensor>
              <Visual>이미지 크기: 1920px×350px</Visual>
            </>
          )}
          {bannerImg && <BannerImage src={reBanner} alt="" />}
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
              <Visual>이미지 크기: 1920px×1170px</Visual>
            </>
          )}
          {introImg && <IntroImage src={reIntro} alt="" />}
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
  transition: filter 0.2s, background-color 0.2s ease;
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
  width: 748px;
  height: 136.7px;
  margin-top: -21px;
`;

const IntroImage = styled.img`
  width: 628px;
  height: 382px;
  margin-top: -21px;
`;

const Visual = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02px;
  margin-top: -25px;
`;

export default ClubImgEditor;
