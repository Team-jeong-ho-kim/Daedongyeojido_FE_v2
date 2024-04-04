import styled from "styled-components";
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
  padding: 0px 17%;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 700;
`;

const OneLine = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #464646;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 1%;
`;

const Tag = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Content = styled.div`
  width: 605px;
  color: #5e5e5e;
  font-size: 14px;
  font-weight: 400;
`;

const LogoImg = styled.img`
  width: 40%;
  height: 45%;
`;
