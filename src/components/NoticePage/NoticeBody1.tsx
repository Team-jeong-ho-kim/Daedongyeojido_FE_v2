import styled from "styled-components";
import { NoticeBanner } from "../../assets";
import { LeftArrow, RightArrow } from "../../assets";

const NoticeBody1 = () => {
  return (
    <Banner>
      <AddNoticeCt>
        <CustomApply>지원서 커스텀</CustomApply>
        <AddNotice>공고 만들기</AddNotice>
      </AddNoticeCt>
      <ClubBanner>
        <ClubBanner_Banner>
          <ClubBanner_TextBox>
            <ClubBanner_1>대마고 인재, 당신을 기다립니다</ClubBanner_1>
            <ClubBanner_2>대마고 전용 동아리 공고</ClubBanner_2>
          </ClubBanner_TextBox>
          <IMGBanner src={NoticeBanner} />
        </ClubBanner_Banner>
        <MajorBanner>
          <MajorBanner_Banner>
            <Arrow src={LeftArrow} />
            <MajorBanner_TextBox>
              <MajorBanner_1>전공 선택</MajorBanner_1>
              <MajorBanner_2>
                <MajorBanner_3>배우고 싶은 </MajorBanner_3>전공은
                <br />
                무엇인가요?
              </MajorBanner_2>
            </MajorBanner_TextBox>
            <Arrow src={RightArrow} />
          </MajorBanner_Banner>
        </MajorBanner>
      </ClubBanner>
    </Banner>
  );
};

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 362px;
  margin-top: 60px;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  align-items: center;
  user-select: none;
`;

const AddNoticeCt = styled.div`
  display: flex;
  width: 84.48%;
  height: 49px;
  gap: 11px;
  justify-content: flex-end;
`;

const AddNotice = styled.button`
  width: 150px;
  height: 100%;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  background-color: #52565d;
  cursor: pointer;
`;

const CustomApply = styled.button`
  width: 168px;
  height: 100%;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  background-color: #52565d;
  cursor: pointer;
`;

const ClubBanner = styled.div`
  display: flex;
  margin-bottom: 58px;
  height: 166.1px;
  width: 84.48%;
  gap: 37px;
  justify-content: center;
  align-items: center;
`;

const ClubBanner_Banner = styled.div`
  display: flex;
  padding: 0px 67.1px;
  align-items: center;
  justify-content: space-between;
  width: 1020px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #eaecef;
  background-color: #fffdfa;
`;

const ClubBanner_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  height: 100%;
`;

const ClubBanner_1 = styled.p`
  height: 29.1px;
  color: #5f6166;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.022px;
`;

const ClubBanner_2 = styled.p`
  height: 52.55px;
  color: #ff5a70;
  font-family: "Spoqa Han Sans Neo";
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.04px;
`;

const IMGBanner = styled.img`
  width: 306px;
  height: 100%;
`;

const MajorBanner = styled.div`
  display: flex;
  padding: 0px 60px 8px;
  width: 571px;
  height: 159px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #eaecef;
  overflow-x: hidden;
`;

const MajorBanner_Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.img`
  margin-top: 8px;
  width: 19.8px;
  height: 41.1px;
  cursor: pointer;
`;

const MajorBanner_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  height: 100%;
`;

const MajorBanner_1 = styled.p`
  height: 22px;
  color: #ff5a70;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.02px;
`;

const MajorBanner_2 = styled.p`
  height: 54px;
  color: #646d81;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.024px;
  text-align: center;
`;

const MajorBanner_3 = styled.span`
  font-weight: 700;
  color: #000;
`;

export default NoticeBody1;
