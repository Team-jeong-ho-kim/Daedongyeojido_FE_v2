import styled, { keyframes } from "styled-components";
import { ClubType, ClubsProps } from "../../types/type";
import { useNavigate } from "react-router-dom";

export const Club = ({ clubs }: ClubsProps) => {
  const link = useNavigate();

  return (
    <Diver>
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
                  return (
                    <ClubTag key={index}>
                      {tag == "#" ? "" : tag.startsWith("#") ? tag : `#${tag}`}
                    </ClubTag>
                  );
                })}
            </TagWrapper>
          </ClubWrapper>
        ))}
      </Container>
    </Diver>
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

const Diver = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 1400px;
  justify-content: center;
  animation: ${fadeIn} 0.8s;
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 223px;
  height: 220px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 3px rgba(0, 0, 0, 0.4);
  }
`;

const ClubLogo = styled.img`
  width: 223px;
  height: 136px;
  cursor: pointer;
`;

const ClubName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #454545;
  cursor: pointer;
`;

const ClubInfo = styled.p`
  color: #717171;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  cursor: pointer;
`;

const ClubTag = styled.p`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
`;
