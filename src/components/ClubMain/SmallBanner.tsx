import styled from "styled-components";
import map from "../../assets/img/SVG/map.svg";
import jeju from "../../assets/img/SVG/Jeju.svg";
import { Cookie } from "../../utils/cookie";
import { MyInfoType } from "../../types/type";
import { useEffect, useState } from "react";
import { getMyInfo } from "../../apis/user";
import { useParams } from "react-router-dom";

type TextProps = {
  isActive: boolean;
};

export const SmallHeader = ({ currentPage }: { currentPage: string }) => {
  const [data, setData] = useState<MyInfoType>();
  const part = Cookie.get("part");
  const accessToken = Cookie.get("accessToken");
  const { clubName } = useParams();

  useEffect(() => {
    if (!accessToken) return;

    getMyInfo()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <SmallLogoImg src={map} />
        <Text href="/CheckClub" isActive={currentPage === "CheckClubPage"}>
          전공동아리 전체 보기
        </Text>
        <Line></Line>
        <SmallLogoImg src={jeju} />
        <Text2 isActive={currentPage === "ClubDetailPage"}>
          전공동아리 상세 보기
        </Text2>
      </Wrapper>
      {(part === "CLUB_LEADER" && clubName == data?.myClub) ||
      part === "ADMIN" ? (
        <Modify href={`/ClubInfoModify/대동여지도`}>수정하기</Modify>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 14% 0px 10.5%;
  width: 100%;
  height: 40px;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 7px;
`;

const SmallLogoImg = styled.img`
  width: 10px;
  height: auto;
`;

const Text = styled.a<TextProps>`
  font-size: 14px;
  user-select: none;
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  color: ${({ isActive }) => (isActive ? "#000000" : "#4E5968")};
  cursor: pointer;
`;

const Text2 = styled.a<TextProps>`
  font-size: 14px;
  user-select: none;
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  color: ${({ isActive }) => (isActive ? "#000000" : "#4E5968")};
`;

const Line = styled.div`
  width: 1px;
  height: 16px;
`;

const Modify = styled.a`
  color: #474747;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
