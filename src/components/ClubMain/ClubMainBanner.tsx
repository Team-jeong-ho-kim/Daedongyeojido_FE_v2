import styled from "styled-components";
import leftarrowimg from "../../assets/img/SVG/LeftArrow.svg";
import rightarrowimg from "../../assets/img/SVG/RightArrow.svg";

export const ClubMainBanner = () => {
  return (
    <Container>
      <BannerImg />
      <BannerBar>
        <MoveBanner>
          <NumberWrapper>
            <CurrentNumber>12</CurrentNumber>
            <And>/</And>
            <TotalNumber>13</TotalNumber>
          </NumberWrapper>
          <ArrowWrapper>
            <ArrowImg src={leftarrowimg} alt="왼쪽 화살표" />
            <ArrowImg src={rightarrowimg} alt="오른쪽 화살표" />
          </ArrowWrapper>
        </MoveBanner>
        <ExplainWrapper>
          <BannerExplain>ㅏㅇ</BannerExplain>
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

const BannerExplain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 38px;
  border: 1px solid #ced4da;
  border-radius: 30px;
  color: #333b3d;
  font-size: 18px;
  padding: 9px 20px;
`;
