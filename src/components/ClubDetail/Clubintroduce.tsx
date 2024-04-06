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
      {introduction && title ? (
        <>
          <Text>
            <Title>{clubName}</Title>
            <OneLine>{title}</OneLine>
            <TagWrapper>
              {tags.map((tag, index) => {
                return (
                  <Tag key={index}>
                    {tag == "#" ? "" : tag.startsWith("#") ? tag : `#${tag}`}
                  </Tag>
                );
              })}
            </TagWrapper>
            <Content>{introduction}</Content>
          </Text>
          <LogoImg src={clubImageUrl ?? undefined} />
        </>
      ) : (
        <Hyeok>
          <Dae>
            동아리 정보가 없습니다.
            <Sang>{clubName}에서는 당신을 원합니다.</Sang>
          </Dae>
        </Hyeok>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10%;
  align-items: center;
  height: 620px;
  padding: 0 17%;
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
  width: 60%;
  height: 65%;
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
