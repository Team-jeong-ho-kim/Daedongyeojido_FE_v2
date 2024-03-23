import styled from "styled-components";
import BackIcon from "../../assets/img/SVG/BackArrow.svg";

export const Back = () => {
  return (
    <Container>
      <Icon src={BackIcon} />
      <Text>뒤로가기</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding-left: 10.5%;
`;

const Icon = styled.img`
  width: 6px;
  height: 11px;
`;

const Text = styled.p`
  color: #4e5968;
  font-size: 14px;
  font-weight: 500;
`;
