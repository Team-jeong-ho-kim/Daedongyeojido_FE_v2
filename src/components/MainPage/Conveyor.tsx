import { useState } from "react";
import styled from "styled-components";
import MainMac from "../../assets/img/PNG/MainMac.png";
import MainMac2 from "../../assets/img/PNG/MainMac2.png";
import MainMac3 from "../../assets/img/PNG/MainMac3.png";
import MainMac4 from "../../assets/img/PNG/MainMac4.png";
import MainMac5 from "../../assets/img/PNG/MainMac5.png";
import MainMacLow1 from "../../assets/img/PNG/MainMacLow1.png";
import MainMacLow2 from "../../assets/img/PNG/MainMacLow2.png";
import MainMacLow3 from "../../assets/img/PNG/MainMacLow3.png";
import MainMacLow4 from "../../assets/img/PNG/MainMacLow4.png";
import MainMacLow5 from "../../assets/img/PNG/MainMacLow5.png";
import Arrow from "../../assets/img/SVG/Arrow.svg";
import { ConveyorImg } from "./ConveyorImg";

const lowImages = [
  MainMacLow1,
  MainMacLow2,
  MainMacLow3,
  MainMacLow4,
  MainMacLow5,
];
const highImages = [MainMac, MainMac2, MainMac3, MainMac4, MainMac5];

export const Conveyor = () => {
  const [index, setIndex] = useState(0);
  const [canMove, setCanMove] = useState<boolean>(true);

  const prevSlide = () => {
    if (!canMove) return;

    setCanMove(false);
    if (index >= 2) {
      setIndex(-2);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    setTimeout(() => {
      setCanMove(true);
    }, 700);
  };

  const nextSlide = () => {
    if (!canMove) return;

    setCanMove(false);
    if (index <= -2) {
      setIndex(2);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
    setTimeout(() => {
      setCanMove(true);
    }, 500);
  };

  return (
    <Wrapper>
      <LeftArrowButton onClick={prevSlide}>
        <img src={Arrow} />
      </LeftArrowButton>
      <SlideContainer style={{ transform: `translateX(${index * 100}vw)` }}>
        {lowImages.map((_, idx) => (
          <Slide key={idx}>
            <ConveyorImg lowSrc={lowImages[idx]} highSrc={highImages[idx]} />
          </Slide>
        ))}
      </SlideContainer>
      <RightArrowButton onClick={nextSlide}>
        <img src={Arrow} />
      </RightArrowButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 800px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.7s ease-in-out;
  transform: translateX(0);
`;

const Slide = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 60%;
  }
`;

const LeftArrowButton = styled.div`
  position: absolute;
  left: 10%;
  transform: rotate(180deg);
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    cursor: pointer;
  }
  z-index: 10;
`;

const RightArrowButton = styled.div`
  position: absolute;
  right: 10%;
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    cursor: pointer;
  }
  z-index: 10;
`;
