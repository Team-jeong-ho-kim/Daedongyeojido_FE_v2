import styled from "styled-components";
import MainLogo from "../../assets/img/PNG/MainLogo.png";
import { Cookie } from "../../utils/cookie";
import { useEffect, useState } from "react";
import { getMyInfo } from "../../apis/user";
import { MyInfoType } from "../../types/type";

interface HeaderProps {
  onLoginToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginToggle }) => {
  const [data, setData] = useState<MyInfoType>();
  const accessToken = Cookie.get("accessToken");
  const part = Cookie.get("part");
  const hrs = window.location.href.split("/")[3];

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
      <Box>
        <Home href="/">
          <Logo src={MainLogo} />
          <Name>대동여지도</Name>
        </Home>
        <Oxb>
          <Xob>
            {part === "ADMIN" ? (
              <Adminpage href="/ClubAdmin" thisH={hrs}>
                동아리 관리
              </Adminpage>
            ) : null}
            {part === "REVERIE" ? (
              <Leveriepage href="/Leverie" thisH={hrs}>
                레벨리
              </Leveriepage>
            ) : null}
            {part === "CLUB_MEMBER" ||
            part === "CLUB_LEADER" ||
            part === "ADMIN" ? (
              <Applicantpage
                href={`/ApplicantQuery/${data?.myClub}`}
                thisH={hrs}
              >
                지원자 보기
              </Applicantpage>
            ) : null}
            <Noticepage href="/Notices" thisH={hrs}>
              공고
            </Noticepage>
            <Clubpage href="/CheckClub" thisH={hrs}>
              동아리
            </Clubpage>
          </Xob>
          <And>
            {accessToken ? (
              <Login href="/My" thisH={hrs}>
                <p>마이페이지</p>
              </Login>
            ) : (
              <Login onClick={onLoginToggle} thisH={"Login"}>
                <p>로그인</p>
              </Login>
            )}
            <Line></Line>
            <Report href="/Ask" thisH={hrs}>
              문의하기
            </Report>
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
  padding-right: 103px;
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

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const Xob = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Adminpage = styled.a<{ thisH: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ thisH }) =>
    thisH == "ClubAdmin" ? "#f3f4f5" : "#fff"};
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Leveriepage = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ thisH }) => (thisH == "Leverie" ? "#f3f4f5" : "#fff")};
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Applicantpage = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ thisH }) =>
    thisH == "ApplicantQuery" ? "#f3f4f5" : "#fff"};
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Noticepage = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ thisH }) => (thisH == "Notices" ? "#f3f4f5" : "#fff")};
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Clubpage = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ thisH }) =>
    thisH == "CheckClub" ? "#f3f4f5" : "#fff"};
  color: #4e5968;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.9px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Oxb = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  gap: 50px;
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
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Login = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${({ thisH }) => (thisH == "My" ? "#f3f4f5" : "#fff")};
  color: #474747;
  font-size: 14px;
  font-weight: 500;
  padding: 9px;
  cursor: pointer;
  > p {
    cursor: pointer;
  }
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 18px;
  background-color: #d2d7dc;
`;

const Report = styled.a<{
  thisH: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${({ thisH }) => (thisH == "Ask" ? "#f3f4f5" : "#fff")};
  color: #474747;
  font-size: 14px;
  font-weight: 500;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.35s ease;
  &:hover {
    background-color: #f3f4f5;
    box-shadow: 0 0 0 2px 2px #222;
  }
`;

export default Header;
