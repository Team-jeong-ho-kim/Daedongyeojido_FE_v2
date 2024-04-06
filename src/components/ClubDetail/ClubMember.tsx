import styled from "styled-components";
import { Member } from "./Member";
import { ClubDetailType } from "../../types/type";

type PropType = Pick<ClubDetailType, "clubMembers" | "clubName">;

export const ClubMember = ({ clubMembers, clubName }: PropType) => {
  return (
    <Container>
      {clubMembers.length > 0 ? (
        <>
          <Title>
            {new Date().getFullYear()}년 {clubName}의 동아리원들을 소개합니다!
          </Title>
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
        </>
      ) : (
        <Hyeok>
          <Dae>
            동아리원이 없습니다.
            <Sang>{clubName}에 지원하고 합격하여 가입하세요.</Sang>
          </Dae>
        </Hyeok>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 5% 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 130px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
  margin-left: 13%;
`;

const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const MemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 420px 420px 420px);
  column-gap: 80px;
  row-gap: 28px;
`;

const Dae = styled.div`
  width: 600px;
  height: 350px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 21px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const Sang = styled.div`
  color: #c4c7cd;
  font-size: 12px;
  font-weight: 400;
`;

const Hyeok = styled.div`
  width: 66vw;
  display: flex;
  justify-content: center;
  padding: 50px;
  align-items: center;
`;
