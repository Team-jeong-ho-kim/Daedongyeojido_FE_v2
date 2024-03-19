import styled from "styled-components";
import { DAELogo } from "../assets";
import { DAEDAE } from "../assets";

const Header = () => {
  return (
    <Container>
      <Box>
        <Home href="/">
          <Logo src={DAELogo} />
          <DAE src={DAEDAE} />
        </Home>
        <Oxb>
          <Xob>
            <Mypage href="/My">마이페이지</Mypage>
            <Noticepage>공고</Noticepage>
            <Clubpage>동아리</Clubpage>
          </Xob>
          <And>
            <Login>로그인</Login>|<Report>문의하기</Report>
          </And>
        </Oxb>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100vw;
  height: 60px;
  border: 2px solid #eaecef;
  background-color: #fff;
  z-index: 100;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Box = styled.div`
  width: calc(100vw - 340px);
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = styled.a`
  display: flex;
  justify-content: center;
  width: 156px;
  gap: 6px;
  height: 55px;
  background-color: #fff;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 22px;
  height: 18px;
  --webkit-user-select: none;
  cursor: pointer;
`;

const DAE = styled.img`
  width: 76px;
  height: 12px;
  --webkit-user-select: none;
  cursor: pointer;
`;

const Xob = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

const Mypage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #f3f4f5;
  color: #4e5968;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Noticepage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  color: #4e5968;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Clubpage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  color: #4e5968;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Oxb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 520px;
  height: 100%;
  gap: 74px;
  margin-right: 105px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const And = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #d2d7dc;
  font-family: "Spoqa Han Sans Neo";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Login = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #474747;
  font-family: "Spoqa Han Sans Neo";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Report = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #474747;
  font-family: "Spoqa Han Sans Neo";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

export default Header;
