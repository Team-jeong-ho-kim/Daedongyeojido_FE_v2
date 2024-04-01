import styled from "styled-components";
import { Member } from "./Member";
import { ClubDetailType } from "../../types/type";

type PropType = Pick<ClubDetailType, "clubMembers" | "clubName">;

export const ClubMember = ({ clubMembers, clubName }: PropType) => {
  return (
    <Container>
      <Title>2024년 {clubName}의 동아리원들을 소개합니다!</Title>
      <GradeWrapper>
        <MemberWrapper>
          {clubMembers.map((member) => {
            return (
              <Member
                name={member.name}
                major={member.major}
                oneLiner={member.oneLiner}
                profileImageUrl={member.profileImageUrl}
              />
            );
          })}
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

const MemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 478px 478px 478px);
  column-gap: 21px;
  row-gap: 28px;
`;
