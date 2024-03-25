import styled from "styled-components";

export const Member = () => {
  return (
    <Container>
      <Image />
      <TextWrapper>
        <Name>원은지</Name>
        <Major>Front-end</Major>
        <OneLine>은진쌤 보고싶다 우이이ㅣ이ㅠㅠㅠㅜㅠ</OneLine>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 10px 0px 0px 10px;
  border: none;
`;

const TextWrapper = styled.div`
  width: 308px;
  height: 170px;
  border-radius: 0px 10px 10px 0px;
  background: #f7f7f7;
  padding-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Major = styled.p`
  color: #626262;
  font-size: 20px;
  font-weight: 700;
`;

const OneLine = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 700;
`;
