import { useState, useEffect } from "react";
import DownArrow from "../../assets/img/PNG/DownArrow.png";
import { styled, keyframes } from "styled-components";
import DDD from "../../assets/img/SVG/QnADelete.svg";
import { useParams } from "react-router-dom";
import { getMyInfo } from "../../apis/user";
import { MyInfoType } from "../../types/type";

interface Returns {
  quest: string;
  answer: string;
  id: number;
  deletePop: (id: number) => void;
}

const Replacing = (str: string) => {
  const returnStr = str.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));

  return returnStr;
};

export const QnABox: React.FC<Returns> = ({ quest, answer, id, deletePop }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<MyInfoType>();
  const { clubName } = useParams();

  useEffect(() => {
    getMyInfo().then((res) => {
      setUser(res.data);
    });
  }, []);

  const eligible = () => {
    if (user) {
      if (
        (user.myClub === clubName && user.part === "CLUB_LEADER") ||
        user.part === "ADMIN"
      ) {
        return true;
      } else return false;
    }
    return false;
  };

  return (
    <QnAWrapper opened={true}>
      <QnATop>
        <Title>
          <EQE>Q.</EQE> <QnASol>{Replacing(quest)}</QnASol>
          {eligible() && (
            <QnADelete onClick={() => deletePop(id)}>
              <QnADel src={DDD} onClick={() => deletePop(id)} />
            </QnADelete>
          )}
        </Title>
        <ArrowImg
          src={DownArrow}
          opened={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </QnATop>
      {isOpen && (
        <Content>
          <EOE>A.</EOE> {Replacing(answer)}
        </Content>
      )}
    </QnAWrapper>
  );
};

const spin = keyframes`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(-180deg);
  }
`;

const QnAWrapper = styled.div<{
  opened?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 70%;
  min-height: ${({ opened }) => (opened ? "auto" : "45px")};
  border-bottom: 1px solid #eaecef;
  border-radius: 5px 5px 0 0;
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: ${({ opened }) => (opened ? "1" : "1.01")};
    box-shadow: 0 0.5px 0 1px #d4d6de;
  }
`;

const QnATop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 45px;
  padding: 10px;
`;

const QnASol = styled.div`
  gap: 1px;
`;

const QnADelete = styled.div`
  cursor: pointer;
  width: 20px;
  display: flex;
  justify-content: center;
`;

const QnADel = styled.img`
  cursor: pointer;
  width: 3px;
  height: 18px;
`;

const ArrowImg = styled.img<{
  opened?: boolean;
}>`
  width: 37px;
  height: 23px;
  cursor: pointer;
  rotate: ${({ opened }) => (opened ? "180deg" : "0deg")};
  &:active {
    animation: ${spin} 0.1s;
  }
`;

const Content = styled.p`
  display: flex;
  padding-left: 10.5%;
  color: #4e5558;
  font-size: 20px;
  font-weight: 500;
  gap: 6px;
`;

const Title = styled.p`
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
`;

const EOE = styled.p`
  color: #4e5558;
  font-size: 20px;
  font-weight: 500;
`;

const EQE = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
