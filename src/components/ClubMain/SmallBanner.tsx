import styled from "styled-components";
import map from "../../assets/img/SVG/map.svg";
import jeju from "../../assets/img/SVG/Jeju.svg";

export const SmallHeader = () => {
  return (
    <Container>
      <SmallLogoImg src={map} />
      <Text>전공동아리 전체 보기</Text>
      <Line></Line>
      <SmallLogoImg src={jeju} />
      <Text>전공동아리 상세 보기</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 7px;
`;

const SmallLogoImg = styled.img`
  width: 10px;
  height: auto;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1px;
  height: 16px;
`;
