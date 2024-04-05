import styled from "styled-components";
import RecruitmentMajor from "./RecruitmentMajor";
import { NoticeFieldType } from "../../types/type";
import React from "react";

interface PropType {
  fields: NoticeFieldType[];
}

const Recruitments: React.FC<PropType> = ({ fields }) => {
  return (
    <Container>
      {fields &&
        fields.map((field: NoticeFieldType, index: number) => {
          return (
            <RecruitmentMajor
              major={field.major}
              todo={field.toDo}
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
