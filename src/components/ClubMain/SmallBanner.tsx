import styled from "styled-components";
import map from "../../assets/img/SVG/map.svg";
import jeju from "../../assets/img/SVG/Jeju.svg";

type TextProps = {
  isActive: boolean;
};

export const SmallHeader = ({ currentPage }: { currentPage: string }) => {
  return (
    <Container>
      <SmallLogoImg src={map} />
      <Text href="/CheckClub" isActive={currentPage === "CheckClubPage"}>
        전공동아리 전체 보기
      </Text>
      <Line></Line>
      <SmallLogoImg src={jeju} />
      <Text2 isActive={currentPage === "ClubDetailPage"}>
        전공동아리 상세 보기
      </Text2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 7px;
  border: none;
  padding-left: 10.5%;
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
  &:hover {
    cursor: pointer;
  }
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
