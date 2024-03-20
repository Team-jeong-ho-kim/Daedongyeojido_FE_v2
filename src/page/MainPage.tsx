import styled, { keyframes } from "styled-components";
import { useState } from "react";
<<<<<<< HEAD
import Header from "../components/Header/Header";
import Login from "../components/Header/Login";
=======
import Header from "../components/Header";
import Login from "../components/Login";
>>>>>>> 1cdb060d6f5e4c8ce5200c81d049945626472228

const Mainpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <CenterBox>
        <Bo>어쨌거나 메인임</Bo>
      </CenterBox>
<<<<<<< HEAD
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
=======
      {isLoginVisible ? <Login onLoginToggle={handleLoginToggle} /> : null}
>>>>>>> 1cdb060d6f5e4c8ce5200c81d049945626472228
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateX(-360px);
	opacity: 0;
  }
  100% {
	transform: translateX(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CenterBox = styled.div`
  display: flex;
  width: 100vw;
  height: 1000vh;
  justify-content: center;
  padding-top: 400px;
`;

const Bo = styled.p`
  color: #foo;
  font-size: 50px;
  font-weight: bold;
  animation: ${fadeIn} 1s;
`;

export default Mainpage;
