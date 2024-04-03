import styled from "styled-components";
import QueryBanner from "../../assets/img/PNG/QueryBanner.png";
import LeftArrow from "../../assets/img/PNG/LeftArrow.png";
import RightArrow from "../../assets/img/PNG/RightArrow.png";
import { Cookie } from "../../utils/cookie";

const NoticeBody1 = () => {
  const part = Cookie.get("part");
  return (
    <Wrapper>
      <Banner>
        {(part === "ADMIN" || part === "CLUB_LEADER") && (
          <AddNoticeCt>
            <LinkBtn>면접 시간 설정</LinkBtn>
            <LinkBtn href="/Custom">지원서 커스텀</LinkBtn>
            <LinkBtn href="/NoticeModify/:clubName/:id">공고 만들기</LinkBtn>
          </AddNoticeCt>
        )}
        <ClubBanner>
          <IMGBanner src={QueryBanner} />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 332px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1346px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 16px;
  user-select: none;
`;

const AddNoticeCt = styled.div`
  display: flex;
  width: 84.48%;
  height: 49px;
  gap: 11px;
  justify-content: flex-end;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 4px;
  background-color: #52565d;
  padding: 0px 20px;
  cursor: pointer;
`;

const ClubBanner = styled.div`
  display: flex;
  gap: 37px;
  justify-content: center;
  align-items: center;
`;

const IMGBanner = styled.img`
  width: 856px;
  height: 100%;
`;

const MajorBanner = styled.div`
  display: flex;
  padding: 0px 60px 8px;
  width: 470px;
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
