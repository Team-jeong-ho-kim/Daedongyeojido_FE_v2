import styled from "styled-components";
import ClubLogo from "../../assets/img/PNG/Daedongyeojido.png";

export const Clubintroduce = () => {
  return (
    <Container>
      <Text>
        <Title>대동여지도</Title>
        <OneLine>대마고 동아리 여기서 지원하고 도움받자</OneLine>
        <TagWrapper>
          <Tag>#행복한</Tag>
          <Tag>#행복한</Tag>
          <Tag>#행복한</Tag>
          <Tag>#행복한</Tag>
          <Tag>#행복한</Tag>
          <Tag>#행복한</Tag>
        </TagWrapper>
        <Content>
          저희 동아리는 오래된 신생 동아리로써 응애응애...저희 동아리는 오래된
          신생 동아리로써 응애응애... 저희 동아리는 오래된 신생 동아리로써
          응애응애...저희 동아리는 오래된 저희 동아리는 오래된 신생 동아리로써
          응애응애...저희 동아리는 오래된 신생 동아리로써 응애응애...저희
          동아리는 오래된 신생 동아리로써 응애응애...저희 동아리는 오래된 저희
          동아리는 오래된 신생 동아리로써 응애응애...저희 동아리는 오래된 신생
          동아리로써 응애응애...저희 동아리는 오래된 신생 동아리로써
          응애응애...저희 동아리는 오래된 저희 동아리는 오래된 신생 동아리로써
          응애응애...저희 동아리는 오래된 신생 동아리로써 응애응애...저희
          동아리는 오래된 신생 동아리로써 응애응애...저희 동아리는 오래된
        </Content>
      </Text>
      <LogoImg src={ClubLogo} />
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
