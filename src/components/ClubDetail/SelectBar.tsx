import styled from "styled-components";
import React from "react";

interface SelectBarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  isSee: boolean;
  onClick: () => void;
}

export const SelectBar: React.FC<SelectBarProps> = ({
  activeTab,
  onTabChange,
  isSee,
  onClick,
}) => {
  return (
    <Container>
      <div>
        <Text
          active={activeTab === "동아리 소개"}
          onClick={() => onTabChange("동아리 소개")}>
          동아리 소개
        </Text>
        <Text
          active={activeTab === "동아리원"}
          onClick={() => onTabChange("동아리원")}>
          동아리원
        </Text>
        <Text active={activeTab === "QnA"} onClick={() => onTabChange("QnA")}>
          Q&A
        </Text>
      </div>
      {isSee && <Button onClick={onClick}>답변하기</Button>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 63px;
  padding: 20px 10.5%;
  border-bottom: 1px solid #eaecef;
  > div {
    display: flex;
    gap: 20px;
  }
`;

const Text = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "black" : "#a1a4a8")};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const Button = styled.div`
  width: 120px;
  height: 32px;
  background-color: black;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
