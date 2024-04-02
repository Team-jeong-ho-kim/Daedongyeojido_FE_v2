import styled from "styled-components";
import MainLogo from "../../assets/img/PNG/Daedongyeojido.png";
import NameLogo2 from "../../assets/img/PNG/NameWhite.png";

const Footer = () => {
  return (
    <Container>
      <Box>
        <DaeBox href="/">
          <Daedae src={MainLogo} />
          <Dae src={NameLogo2} />
        </DaeBox>
        | <D>대동여지도</D> | <D>DaeDongYeoJiDo</D>
      </Box>
      <List>
        대덕소프트웨어마이스터고등학교를 위한 전공동아리 관리 서비스 대동여지도
        | PM: 변정현
        <br />
        FRONTEND: 원은지, 이영하, 이지후 | ANDROID: 홍서은 | BACKEND: 변정현,
        김가은 | DESIGN: 이나경
        <br />
        주소: 대전광역시 유성구 가정북로 76
      </List>
      <ListA
        href="https://github.com/Team-jeong-ho-kim/Daedongyeojido_FE_v2"
        target="_Blank"
      >
        @DAEDONGYEOJIDO
      </ListA>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 11.5% 100px;
  align-items: flex-start;
  gap: 21px;
  width: 100%;
  background-color: #303740;
`;

const Box = styled.p`
  display: flex;
  color: #bdbdbd;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.7px;
  height: 18px;
  align-items: center;
  user-select: none;
`;

const D = styled.p`
  display: flex;
  height: 100%;
  font-weight: 700;
  margin: 0 12px;
  align-items: center;
`;

const DaeBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-right: 12px;
  cursor: pointer;
`;

const Daedae = styled.img`
  width: 22px;
  height: 18px;
  cursor: pointer;
`;

const Dae = styled.img`
  width: 76px;
  height: 12px;
  cursor: pointer;
`;

const List = styled.p`
  color: #bdbdbd;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  line-spacing: -0.7x;
`;

const ListA = styled.a`
  color: #bdbdbd;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  line-spacing: -0.7x;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export default Footer;
