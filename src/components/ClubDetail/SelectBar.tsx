import styled from "styled-components";
import React from "react";

interface SelectBarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

export const SelectBar: React.FC<SelectBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <Container>
      <Text
        active={activeTab === "동아리 소개"}
        onClick={() => onTabChange("동아리 소개")}
      >
        동아리 소개
      </Text>
      <Text
        active={activeTab === "동아리원"}
        onClick={() => onTabChange("동아리원")}
      >
        동아리원
      </Text>
      <Text active={activeTab === "QnA"} onClick={() => onTabChange("QnA")}>
        Q&A
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1.5%;
  width: 100%;
  height: 63px;
  padding: 20px 10.5%;
  border-bottom: 1px solid #eaecef;
`;

const Text = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "black" : "#a1a4a8")};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
