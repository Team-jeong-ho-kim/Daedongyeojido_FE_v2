import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

type PropType = {
  children: React.ReactNode;
};

export const ScrollBox = ({ children }: PropType) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const block = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (block.current) {
        const bottom_of_element =
          block.current.offsetTop + block.current.offsetHeight / 2;
        const bottom_of_window = window.scrollY + window.innerHeight;
        if (bottom_of_window > bottom_of_element) setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={block} isVisible={isVisible}>
      {children}
    </Box>
  );
};

const Box = styled.div<{ isVisible: boolean }>`
  transition: opacity 0.4s linear, transform 0.6s linear;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0px)" : "translateY(60px)"};
`;
