import styled from "styled-components";
import leftarrowimg from "../../assets/img/SVG/LeftArrow.svg";
import rightarrowimg from "../../assets/img/SVG/RightArrow.svg";
import { ClubBannerType, ClubsBannerProps } from "../../types/type";
import { useEffect, useState } from "react";

export const ClubMainBanner = ({ banners }: ClubsBannerProps) => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImg((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [banners, img]);

  const imgChangeLeft = () => {
    setImg((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const imgChangeRight = () => {
    setImg((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <BannerImg src={banners[img]?.bannerImgUrl} alt={`Banner ${img}`} />
      <BannerBar>
        <MoveBanner>
          <NumberWrapper>
            <CurrentNumber>{img + 1}</CurrentNumber>
            <And>/</And>
            <TotalNumber>{banners.length}</TotalNumber>
          </NumberWrapper>
          <ArrowWrapper>
            <ArrowImg
              src={leftarrowimg}
              alt="왼쪽 화살표"
              onClick={imgChangeLeft}
            />
            <ArrowImg
              src={rightarrowimg}
              alt="오른쪽 화살표"
              onClick={imgChangeRight}
            />
          </ArrowWrapper>
        </MoveBanner>
        <ExplainWrapper>
          {banners.map((banner: ClubBannerType, index: number) => (
            <BannerExplain
              key={index}
              $isActive={index === img}
              onClick={() => setImg(index)}
            >
              {banner.bannerTitle}
            </BannerExplain>
          ))}
        </ExplainWrapper>
      </BannerBar>
    </Container>
  );
};

const Container = styled.div``;

const BannerImg = styled.img`
  position: relative;
  width: 100%;
  height: 426px;
`;

const BannerBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 64px;
  padding-left: 10.5%;
  border-bottom: 1px solid #e9ecef;
`;

const MoveBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 124px;
  height: 33px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.5);
`;

const NumberWrapper = styled.div`
  display: flex;
`;

const CurrentNumber = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

const And = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

const TotalNumber = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

const ArrowWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const ArrowImg = styled.img`
  width: 5px;
  height: 8px;
  cursor: pointer;
`;

const ExplainWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BannerExplain = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border: ${(props) =>
    props.$isActive ? "1.5px solid #FF2D6A" : "1px solid #CED4D1"};
  border-radius: 30px;
  color: ${(props) => (props.$isActive ? "#FF2D6A" : "#495057")};
  font-size: 12px;
  padding: 9px 20px;
  cursor: pointer;
`;
