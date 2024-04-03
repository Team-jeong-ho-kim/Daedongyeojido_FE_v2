import styled from "styled-components";
import RecruitmentMajor from "./RecruitmentMajor";
import { NoticeFieldType } from "../../types/type";
import { MajorType } from "../../types/type";

type PropType = {
  fields: NoticeFieldType[];
};

const Recruitments = ({ fields }: PropType) => {
  const majorTranslate = (major: MajorType) => {
    switch (major) {
      case "AI":
        return "AI";
      case "AND":
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
      default:
        return "없음";
    }
  };
  return (
    <Container>
      {fields &&
        fields.map((field: NoticeFieldType, index: number) => {
          return (
            <RecruitmentMajor
              major={majorTranslate(field.major)}
              toDo={field.toDo}
              key={index}
            />
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #ececec;
`;

export default Recruitments;
