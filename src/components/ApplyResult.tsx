import styled, { keyframes } from "styled-components";
import { useState } from "react";

interface ApplyDetail {
  name: string;
  myClub: string;
  myReport: {
    clubName: string;
    hopeMajor: string;
    deadline: string;
    passingResult: string;
  }[];
}

const ApplyResult = () => {
  return (
    <Applys>
      <Apply>
        <ApplyDetails>
          <ApplyName>대동여지도</ApplyName>
          <ApplyData>
            <ApplyMajor>프론트엔드</ApplyMajor>
            <ApplyD>
              <ApplyLD>지원 마감일 : 2024-02-10</ApplyLD>
              <ApplyIvD>면접 일시 : 2024-02-10 12:30 ~ 12:50</ApplyIvD>
            </ApplyD>
          </ApplyData>
        </ApplyDetails>
        <ApplyStatus>
          서류 : 합격
          <br />
          면접 : 불합격
        </ApplyStatus>
      </Apply>
    </Applys>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-64px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Applys = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 1004px;
  margin-top: 52px;
`;

const Apply = styled.div`
  display: flex;
  width: 1004px;
  justify-content: space-between;
  align-items: center;
  height: 71px;
  border-radius: 6px;
  border: 1px solid #eaecef;
  background-color: #fff;
  animation: ${fadeIn} 1s;
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: 1.01;
    box-shadow: 1px 1px 1px #d4d6de;
  }
`;

const ApplyDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplyName = styled.p`
  display: flex;
  width: 137.8px;
  height: 100%;
  text-align: center;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  justify-content: center;
  align-items: center;
`;

const ApplyData = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplyMajor = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
`;

const ApplyD = styled.div`
  display: flex;
  gap: 13.7px;
`;

const ApplyLD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 150px;
`;

const ApplyIvD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 227px;
`;

const ApplyStatus = styled.p`
  color: #4e5558;
  text-align: end;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  width: 96px;
  height: 100%;
  display: flex;
  padding-right: 24px;
  align-items: center;
  justify-content: flex-end;
`;

export default ApplyResult;
