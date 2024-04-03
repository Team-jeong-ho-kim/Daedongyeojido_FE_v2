import styled, { keyframes } from "styled-components";
import { ClubType, ClubsProps } from "../../types/type";
import { useNavigate } from "react-router-dom";

export const Club = ({ clubs }: ClubsProps) => {
  const link = useNavigate();

  return (
    <Container>
      {clubs.map((club: ClubType, index: number) => (
        <ClubWrapper
          key={index}
          onClick={() => {
            link(`/ClubDetail/${club.clubName}`);
          }}
        >
          <ClubLogo src={club.clubImageUrl} />
          <ClubName>{club.clubName}</ClubName>
          <ClubInfo>{club.title}</ClubInfo>
          <TagWrapper>
            {club &&
              club.tags.map((tag, index) => {
                return <ClubTag key={index}>#{tag}</ClubTag>;
              })}
          </TagWrapper>
        </ClubWrapper>
      ))}
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-200px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 223px 223px 223px 223px 223px 223px);
  column-gap: 30px;
  row-gap: 30px;
  padding: 0px 20%;
  justify-content: space-around;
  animation: ${fadeIn} 0.8s;
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 300px;
`;

const ClubLogo = styled.img`
  width: 223px;
  height: 136px;
`;

const ClubName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #454545;
`;

const ClubInfo = styled.p`
  color: #717171;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

const ClubTag = styled.p`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
`;
