import styled from "styled-components";
import { useState, useEffect } from "react";
import ScrollUp from "../../assets/img/SVG/ScrollUp.svg";

const ScrollUpper = () => {
  const [isV, setIsV] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsV(true);
    } else {
      setIsV(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isV && (
        <Container>
          <Button src={ScrollUp} onClick={scrollToTop} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  cursor: pointer;
  border-radius: 6px;
`;

const Button = styled.img`
  background-color: #fff;
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default ScrollUpper;
