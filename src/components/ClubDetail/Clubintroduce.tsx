import styled from "styled-components";
import ClubLogo from "../../assets/img/PNG/Daedongyeojido.png";
import { ClubDetailType } from "../../types/type";

type PropType = Pick<
  ClubDetailType,
  "tags" | "clubImageUrl" | "introduction" | "clubName" | "title"
>;

export const Clubintroduce = ({
  tags,
  clubImageUrl,
  introduction,
  clubName,
  title,
}: PropType) => {
  return (
    <Container>
      <Text>
        <Title>{clubName}</Title>
        <OneLine>{title}</OneLine>
        <TagWrapper>
          {tags.map((tag, index) => {
            return <Tag key={index}>#{tag}</Tag>;
          })}
        </TagWrapper>
        <Content>{introduction}</Content>
      </Text>
      <LogoImg src={clubImageUrl ?? undefined} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10%;
  align-items: center;
  height: 620px;
  margin-left: 10.5%;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 44px;
  font-weight: 700;
`;

const OneLine = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 1%;
`;

const Tag = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Content = styled.div`
  width: 605px;
  color: #5e5e5e;
  font-size: 20px;
  font-weight: 400;
`;

const LogoImg = styled.img`
  width: 773px;
  height: 472px;
`;
