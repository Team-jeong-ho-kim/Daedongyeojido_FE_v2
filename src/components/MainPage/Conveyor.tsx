import { useState } from "react";
import styled from "styled-components";
import MacBook from "../../assets/img/SVG/MacBook.svg";
import Arrow from "../../assets/img/SVG/Arrow.svg";

const images = [MacBook, MacBook, MacBook, MacBook, MacBook];

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
        {images.map((image, idx) => (
          <Slide key={idx}>
            <img src={image} alt={`Slide ${idx}`} />
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
    height: 100%;
  }
`;

const LeftArrowButton = styled.div`
  position: absolute;
  left: 180px;
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
  right: 180px;
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    cursor: pointer;
  }
  z-index: 10;
`;
