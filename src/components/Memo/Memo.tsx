import styled from "styled-components";

export const Memo = () => {
  return (
    <Container>
      <TopWrapper>
        <Title>2108 변정현 디자이너 면접 기록</Title>
        <BtnWrapper>
          <Button>합격</Button>
          <Button>불합격</Button>
        </BtnWrapper>
      </TopWrapper>
      <Record placeholder="면접 내용을 기록해보세요."></Record>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 8.5%;
  height: 1010px;
  justify-content: center;
`;

const TopWrapper = styled.div`
  width: 1591px;
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 700;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  color: black;
  border-radius: 10px;
  border: 1px solid #333b3d;
  background: #f3f4f5;
  cursor: pointer;
  &:hover {
    color: white;
    background: #333b3d;
  }
`;

const Record = styled.textarea`
  width: 1591px;
  height: 700px;
  font-size: 24px;
  font-weight: 500;
  border-radius: 20px;
  border: 2px solid #eaecef;
  color: #2f3239;
  padding: 30px;
  resize: none;
  &::placeholder {
    font-size: 20px;
    color: #b0b0b0;
  }
  &:focus {
    border: 2px solid #2f3239;
  }
`;
