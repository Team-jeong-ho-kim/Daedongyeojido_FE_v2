import styled, { keyframes } from "styled-components";
import LoginInput from "./LoginInput";
import { useState } from "react";
import { login } from "../../apis/auth";
import { Cookie } from "../../utils/cookie";

const Login = ({ onLoginToggle }: { onLoginToggle: () => void }) => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onLoginToggle();
  };

  const handleLogin = () => {
    login({
      account_id: ID,
      password: password,
    })
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        Cookie.set("refreshToken", res.data.refreshToken);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container onClick={handleClose}></Container>
      <LoginBox>
        <Daedae>대동여지도</Daedae>
        <LoginInput
          placeholder="아이디"
          value={ID}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setID(e.target.value)
          }
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </LoginBox>
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

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18.75px;
  padding-top: 0.75px;
  position: fixed;
  top: calc(50% - 206.25px);
  left: calc(50% - 288px);
  width: 576px;
  height: 412.5px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  z-index: 501;
  animation: ${fadeIn} 0.5s;
`;

const Daedae = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

const LoginButton = styled.button`
  width: 480px;
  height: 62.5px;
  background-color: #333b3d;
  border-radius: 10px;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
`;

export default Login;
