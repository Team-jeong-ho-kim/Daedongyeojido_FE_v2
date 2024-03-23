import { styled, keyframes } from "styled-components";
import DownArrow from "../../assets/img/PNG/DownArrow.png";
import { AnnouncementType } from "../../types/type";
import { useState } from "react";

export const AnnounceBox = ({ title, contents }: AnnouncementType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AnnounceWrapper opened={true}>
      <AnnounceBox2>
        <AnnounceOne>
          <O></O>
          <AlarmPC>{title}</AlarmPC>
        </AnnounceOne>
        <Expand
          src={DownArrow}
          opened={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </AnnounceBox2>
      {isOpen && <AnnounceContent>{contents}</AnnounceContent>}
    </AnnounceWrapper>
  );
};

const spin = keyframes`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(-360deg);
  }
`;

const AnnounceWrapper = styled.div<{
  opened?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: ${({ opened }) => (opened ? "auto" : "45px")};
  border-bottom: 1px solid #eaecef;
  border-radius: 5px 5px 0 0;
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: ${({ opened }) => (opened ? "1" : "1.01")};
    box-shadow: 0 0.5px 0 1px #d4d6de;
  }
`;

const AnnounceBox2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
`;

const Expand = styled.img<{
  opened?: boolean;
}>`
  width: 32px;
  height: 23px;
  cursor: pointer;
  rotate: ${({ opened }) => (opened ? "180deg" : "0deg")};
  &:hover {
    animation: ${spin} 0.5s;
  }
`;

const O = styled.div`
  background-color: #000;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const AnnounceOne = styled.div`
  display: flex;
  gap: 20px;
  height: 25px;
  align-items: center;
`;

const AnnounceContent = styled.p`
  display: flex;
  padding-left: 20px;
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

const AlarmPC = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;
