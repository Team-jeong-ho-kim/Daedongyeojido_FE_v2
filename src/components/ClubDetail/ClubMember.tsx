import styled from "styled-components";
import { Member } from "./Member";

export const ClubMember = () => {
  return (
    <Container>
      <Title>2024년 대동여지도의 동아라원들을 소개합니다!</Title>
      <GradeWrapper>
        <Grade>1학년</Grade>
        <MemberWrapper>
          <Member />
        </MemberWrapper>
      </GradeWrapper>
      <GradeWrapper>
        <Grade>2학년</Grade>
        <MemberWrapper>
          <Member />
        </MemberWrapper>
      </GradeWrapper>
      <GradeWrapper>
        <Grade>3학년</Grade>
        <MemberWrapper>
          <Member />
        </MemberWrapper>
      </GradeWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 5% 10.5%;
  display: flex;
  flex-direction: column;
  gap: 130px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Grade = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const MemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 478px 478px 478px);
  column-gap: 21px;
  row-gap: 28px;
`;
