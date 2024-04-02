import styled from "styled-components";
import NameLogo from "../../assets/img/PNG/NameBlack.png";
import MainLogo from "../../assets/img/PNG/Daedongyeojido.png";
import { Cookie } from "../../utils/cookie";

interface HeaderProps {
  onLoginToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginToggle }) => {
  const accessToken = Cookie.get("accessToken");
  return (
    <Container>
      <Box>
        <Home href="/">
          <Logo src={MainLogo} />
          <DAE src={NameLogo} />
        </Home>
        <Oxb>
          <Xob>
            <Noticepage href="/Notices">공고</Noticepage>
            <Clubpage href="/CheckClub">동아리</Clubpage>
          </Xob>
          <And>
            {accessToken ? (
              <Login href="/My">
                <p>마이페이지</p>
              </Login>
            ) : (
              <Login onClick={onLoginToggle}>
                <p>로그인</p>
              </Login>
            )}
            <Line></Line>
            <Report href="/Ask">문의하기</Report>
          </And>
        </Oxb>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
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

const Noticepage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
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
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Oxb = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 520px;
  height: 100%;
  gap: 50px;
  margin-right: 105px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const And = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
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
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #474747;
  font-size: 14px;
  font-weight: 500;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 18px;
  background-color: #d2d7dc;
`;

const Report = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #474747;
  font-size: 14px;
  font-weight: 500;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #a3a4a5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

export default Header;
