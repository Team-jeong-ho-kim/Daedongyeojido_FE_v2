import styled from "styled-components";
import RecruitmentMajor from "./RecruitmentMajor";

const Recruitments = () => {
  return (
    <Container>
      <RecruitmentMajor />
      <RecruitmentMajor />
      <RecruitmentMajor />
      <RecruitmentMajor />
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
