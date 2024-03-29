import styled from "styled-components";
import Edit from "../../assets/img/SVG/Edit.svg";
import Remove from "../../assets/img/SVG/Remove.svg";
import { adminPageType, memberProps } from "../../types/type";
import { deleteNotice } from "../../apis/admin-club";

export const Club = ({ clubs }: memberProps) => {
  const onDelete = (name: string) => {
    if (!window.confirm(`정말 "${name}"동아리를 삭제 하시겠습니까?`)) return;

    deleteNotice(name)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {clubs.map((club: adminPageType, index: number) => (
        <div>
          <TeacherWrapper key={index}>
            <O></O>
            <Teacher>{club.teacherName} 선생님</Teacher>
          </TeacherWrapper>
          <ClubBox>
            <ClubName>{club.clubName}</ClubName>
            {club.memberResponses.map((element, index) => {
              return (
                <TextWrapper key={index}>
                  <Info>{element.userName}</Info>
                  <Info>{element.classNumber}</Info>
                  <Info>{element.part}</Info>
                </TextWrapper>
              );
            })}
            <IconWrapper>
              <Icon src={Edit} />
              <Icon
                src={Remove}
                onClick={() => {
                  onDelete(club.clubName);
                }}
              />
            </IconWrapper>
          </ClubBox>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 258px 258px 258px 258px 258px);
  column-gap: 10px;
  row-gap: 20px;
`;

const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const O = styled.div`
  background-color: #626262;
  width: 4px;
  height: 4px;
  border-radius: 4px;
`;

const Teacher = styled.span`
  color: #626262;
  font-size: 12px;
  font-weight: 700;
`;

const ClubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 258px;
  padding: 20px 30px;
  border-radius: 10px;
  border: 2px solid #cdd1d6;
`;

const ClubName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
`;
