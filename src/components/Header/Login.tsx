import styled, { keyframes } from "styled-components";
import LoginInput from "./LoginInput";
import { useState } from "react";
import { login } from "../../apis/auth";
import { Cookie } from "../../utils/cookie";
import IC from "../../assets/img/SVG/IC.svg";
import ICN from "../../assets/img/SVG/ICN.svg";

const Login = ({ onLoginToggle }: { onLoginToggle: () => void }) => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isSee, setIsSee] = useState<boolean>(false);

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
        handleClose();
      })
      .catch(() => {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        setPassword("");
        setIsError(true);
      });
  };

  const handleEnterLogin = () => {
    login({
      account_id: ID,
      password: password,
    })
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        Cookie.set("refreshToken", res.data.refreshToken);
        Cookie.set("part", res.data.part);
        alert("로그인되었습니다.");
        handleClose();
      })
      .catch(() => {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        setPassword("");
        setIsError(true);
      });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleEnterLogin();
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    const restr = /^[a-zA-Z0-9]+$/;
    if ((restr.test(input) || input == "") && input.length <= 20) setID(input);
  };

  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    const restr = /^[a-zA-Z0-9]+$/;
    if ((restr.test(input) || input == "") && input.length <= 30)
      setPassword(input);
  };

  return (
    <>
      <Container onClick={handleClose}>
        <LoginBox onClick={(e) => e.stopPropagation()}>
          <Daedae>대동여지도</Daedae>
          <LoginInput
            placeholder="아이디"
            value={ID}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value == "") {
                setIsSee(false);
              }
              handleId(e);
            }}
          />
          <Divs>
            <LoginInput
              type={isSee ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onFocus={() => setPassword("")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value == "") {
                  setIsSee(false);
                }
                handlePW(e);
              }}
              onKeyDown={handleEnter}
            />
            {password &&
              (isSee ? (
                <See src={IC} onClick={() => setIsSee(false)} />
              ) : (
                <Seeno src={ICN} onClick={() => setIsSee(true)} />
              ))}
            {isError && (
              <Error>아이디 또는 비밀번호가 일치하지 않습니다.</Error>
            )}
          </Divs>
          <LoginButton
            onClick={handleLogin}
            canSubmit={Boolean(ID && password)}
          >
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
  margin-top: 3px;
  margin-left: 4px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  padding-top: 0.75px;
  top: calc(50% - 206.25px);
  left: calc(50% - 288px);
  width: 360px;
  height: 432px;
  border-radius: 8px;
  background-color: #fff;
  z-index: 501;
  animation: ${fadeIn} 0.5s;
  user-select: none;
`;

const Daedae = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 7px;
`;

const LoginButton = styled.button<{ canSubmit: boolean }>`
  width: 312px;
  height: 45px;
  transition: 0.14s linear;
  background-color: ${({ canSubmit }) => (canSubmit ? "#FF8086" : "#797d81")};
  border-radius: 4px;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 27px;
  transition: scale 0.2s;
  &:hover {
    scale: 1.02;
  }
`;

const Divs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const See = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 13px;
`;

const Seeno = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 13px;
`;

export default Login;
