import { useRef, useEffect } from "react";

export const ConveyorImg = ({
  lowSrc,
  highSrc,
}: {
  lowSrc: string;
  highSrc: string;
}) => {
  const ref = useRef<HTMLImageElement>(null);

  function changeImg() {
    if (ref.current) {
      ref.current.src = highSrc;
    }
  }

  function loadImg() {
    const newImg = new Image();
    newImg.src = highSrc;
    newImg.addEventListener("load", function () {
      changeImg();
    });
  }

  useEffect(() => {
    loadImg();
  }, []);

  return <img src={lowSrc} />;
};
