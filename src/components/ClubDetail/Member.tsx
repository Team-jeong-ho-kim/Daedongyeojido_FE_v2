import styled from "styled-components";
import { MajorType } from "../../types/type";

type PropType = {
  name: string;
  major: MajorType;
  oneLiner: string;
  profileImageUrl: string | null;
};

export const Member = ({
  name,
  major,
  oneLiner,
  profileImageUrl,
}: PropType) => {
  return (
    <Container>
      <Image src={profileImageUrl ?? undefined} />
      <TextWrapper>
        <Name>{name}</Name>
        <Major>{major}</Major>
        <OneLine>{oneLiner}</OneLine>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px 0px 0px 10px;
  border: none;
`;

const TextWrapper = styled.div`
  width: 269px;
  height: 150px;
  border-radius: 0px 10px 10px 0px;
  background: #f7f7f7;
  padding-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Major = styled.p`
  color: #626262;
  font-size: 16px;
  font-weight: 700;
`;

const OneLine = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 700;
`;
