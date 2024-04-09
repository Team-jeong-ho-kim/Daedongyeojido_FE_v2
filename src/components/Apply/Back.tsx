import styled from "styled-components";
import BackIcon from "../../assets/img/SVG/BackArrow.svg";
import { useNavigate } from "react-router-dom";

export const Back = () => {
  const link = useNavigate();
  return (
    <Container>
      <Div onClick={() => link("/Notices")}>
        <Icon src={BackIcon} onClick={() => link("/Notices")} />
        <Text onClick={() => link("/Notices")}>뒤로가기</Text>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 10.5%;
  position: fixed;
  top: 60px;
  background-color: #fff;
`;

const Div = styled.div`
  display: flex;
  gap: 6px;
  cursor: pointer;
  align-items: center;
`;

const Icon = styled.img`
  width: 6px;
  height: 11px;
  cursor: pointer;
`;

const Text = styled.p`
  color: #4e5968;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
