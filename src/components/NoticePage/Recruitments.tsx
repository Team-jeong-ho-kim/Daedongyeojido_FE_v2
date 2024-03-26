import styled from "styled-components";
import RecruitmentMajor from "./RecruitmentMajor";
import { NoticeFieldType } from "../../types/type";

type PropType = {
  fields: NoticeFieldType[];
};

const Recruitments = ({ fields }: PropType) => {
  return (
    <Container>
      {fields &&
        fields.map((field: NoticeFieldType, index: number) => {
          return (
            <RecruitmentMajor
              major={field.major}
              todo={field.todo}
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
