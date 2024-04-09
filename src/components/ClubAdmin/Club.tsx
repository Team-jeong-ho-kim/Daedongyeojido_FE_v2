import styled from "styled-components";
import Edit from "../../assets/img/SVG/Edit.svg";
import Remove from "../../assets/img/SVG/Remove.svg";
import { adminPageType, MajorType, memberProps } from "../../types/type";
import { deleteNotice } from "../../apis/admin-club";
import { useState } from "react";
import { PlusMember } from "./PlusMember";

export const Club = ({ clubs }: memberProps) => {
  const [selectedClub, setSelectedClub] = useState<adminPageType | null>(null);
  const [, setIsPlusMemberVisible] = useState<boolean>(false);
  const [ivsdSelect, setIvsdSelect] = useState<boolean>(false);

  const onDelete = (name: string) => {
    if (!window.confirm(`정말 "${name}"동아리를 삭제 하시겠습니까?`)) return;

    deleteNotice(name)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleEditClick = (club: adminPageType) => {
    setSelectedClub(club);
    handleItvToggle();
    setIsPlusMemberVisible(true);
  };

  const handleItvToggle = () => {
    setIvsdSelect(!ivsdSelect);
  };

  const MajorTransl = (major: MajorType) => {
    switch (major) {
      case "AI":
        return "AI";
      case "AND":
        return "Android";
      case "BACK":
        return "BackEnd";
      case "DESIGN":
        return "Design";
      case "DEVOPS":
        return "DevOps";
      case "EMBEDDED":
        return "Embedded";
      case "FLUTTER":
        return "Flutter";
      case "FRONT":
        return "FrontEnd";
      case "GAME":
        return "Game";
      case "IOS":
        return "IOS";
      case "SECURITY":
        return "Security";
      case "UNDEFINED":
        return "";
      default:
        return "Unknown";
    }
  };

  return (
    <Container>
      {clubs.map((club: adminPageType, index: number) => (
        <div key={index}>
          <TeacherWrapper>
            <O></O>
            <Teacher>{club.teacherName} 선생님</Teacher>
          </TeacherWrapper>
          <ClubBox>
            <ClubName>{club.clubName}</ClubName>
            {club.memberResponses.map((element, index) => {
              return (
                <TextWrapper key={index}>
                  <NameNCN>
                    <Info>{element.userName}</Info>
                    <Info>{element.classNumber ?? "0000"}</Info>
                  </NameNCN>
                  <PartNMajor>
                    <Info>
                      {element.part === "ADMIN"
                        ? "관리자"
                        : element.part === "CLUB_LEADER"
                        ? "동아리장"
                        : element.part === "TEACHER"
                        ? "담당 선생님"
                        : element.part === "CLUB_MEMBER"
                        ? "동아리원"
                        : element.part === "CLUB_LEADER_TEACHER"
                        ? "동아리 전담 선생님"
                        : "무소속"}
                    </Info>
                    <Info>{MajorTransl(element.major)}</Info>
                  </PartNMajor>
                </TextWrapper>
              );
            })}
            <IconWrapper>
              <Icon src={Edit} onClick={() => handleEditClick(club)} />
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
      {ivsdSelect && selectedClub && (
        <PlusMember
          selectedClub={selectedClub}
          handleItvToggle={handleItvToggle}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
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

const NameNCN = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const PartNMajor = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ClubName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 20px;
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
  cursor: pointer;
`;
