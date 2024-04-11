import styled from "styled-components";
import { MajorType } from "../../types/type";

interface Notices {
  major: MajorType;
  todo: string;
}

const RecruitmentMajor: React.FC<Notices> = ({ major, todo }) => {
  const majorTranslate = (major: MajorType) => {
    switch (major) {
      case "AI":
        return "AI";
      case "AOS":
        return "안드로이드";
      case "BACK":
        return "백엔드";
      case "DESIGN":
        return "디자인";
      case "DEVOPS":
        return "DevOps";
      case "EMBEDDED":
        return "임베디드";
      case "FLUTTER":
        return "플러터";
      case "FRONT":
        return "프론트엔드";
      case "GAME":
        return "게임 개발";
      case "IOS":
        return "IOS";
      case "SECURITY":
        return "보안";
      case "UNDEFINED":
        return "미정";
      case "":
        return "미정";
      default:
        return "없음";
    }
  };
  return (
    <Container>
      <Major>{majorTranslate(major)}</Major>
      <Ideal>{todo}</Ideal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
`;

const Major = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 20.4%;
  height: 100%;
  border-right: 2px solid #ececec;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

const Ideal = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 79.6%;
  height: 100%;
  color: #585858;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
`;

export default RecruitmentMajor;
