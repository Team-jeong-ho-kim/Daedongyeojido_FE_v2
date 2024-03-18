import styled from "styled-components";
import Header from "../components/Header";
import INT from "../components/interviewSchedule";

const MyPage = () => {
  return (
    <Container>
      <Header />
      <CenterBox>
        <LeftBox></LeftBox>
        <RightBox></RightBox>
      </CenterBox>
      <INT />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const CenterBox = styled.div`
  width: 100%;
  display: flex;
`;

const LeftBox = styled.div`
  width: 30%;
  height: 1020px;
  border: 1px solid #eaecef;
`;

const RightBox = styled.div`
  width: 70%;
  height: 1020px;
  border: 1px solid #eaecef;
`;

const MyName = styled.p`
  width: auto;
  font-size: 30px;
  font-weight: bold;
  color: #000;
  line-height: 30px;
`;

export default MyPage;
