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
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 130px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
  margin-left: 12vw;
`;

const MemberWrapper = styled.div`
  flex-wrap: wrap;
  padding: 0 12vw;
  display: flex;
  justify-content: center;
  column-gap: 4vw;
  row-gap: 2vw;
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
