import styled, { keyframes } from "styled-components";
import LoginInput from "./LoginInput";
import { useState } from "react";
import { login } from "../../apis/auth";
import { Cookie } from "../../utils/cookie";

const Login = ({ onLoginToggle }: { onLoginToggle: () => void }) => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleClose = () => {
    onLoginToggle();
  };

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    login({
      account_id: ID,
      password: password,
    })
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        Cookie.set("refreshToken", res.data.refreshToken);
        Cookie.set("part", res.data.part);
      })
      .catch(() => {
        alert("아이디를 확인해주세요");
        setIsError(true);
      });
  };

  return (
    <>
      <Container onClick={handleClose}>
        <LoginBox onClick={(e) => e.stopPropagation()}>
          <Daedae>대동여지도</Daedae>
          <LoginInput
            placeholder="아이디"
            value={ID}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setID(e.target.value)
            }
          />
          <div>
            <LoginInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {isError && <Error>비밀번호를 확인해주세요</Error>}
          </div>
          <LoginButton
            onClick={handleLogin}
            canSubmit={Boolean(ID && password)}>
            로그인
          </LoginButton>
        </LoginBox>
      </Container>
    </>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-40px);
	opacity: 0.5;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 500;
`;

const Error = styled.div`
  height: 0px;
  color: #f5290a;
  font-size: 12px;
  margin-left: 4px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-top: 0.75px;
  top: calc(50% - 206.25px);
  left: calc(50% - 288px);
  width: 360px;
  height: 432px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 501;
  animation: ${fadeIn} 0.5s;
`;

const Daedae = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const LoginButton = styled.button<{ canSubmit: boolean }>`
  width: 312px;
  height: 48px;
  transition: 0.14s linear;
  background-color: ${({ canSubmit }) => (canSubmit ? "#FF8086" : "#797d81")};
  border-radius: 4px;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 28px;
`;

export default Login;
