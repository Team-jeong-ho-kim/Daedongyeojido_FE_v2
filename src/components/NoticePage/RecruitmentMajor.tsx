import styled from "styled-components";

const RecruitmentMajor = () => {
  return (
    <Container>
      <Major>프론트엔드</Major>
      <Ideal>대동여지도 클라이언트를 맡아 유지보수할 친구</Ideal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
`;

const Major = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 20.4%;
  height: 100%;
  border-right: 2px solid #ececec;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

const Ideal = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 79.6%;
  height: 100%;
  color: #585858;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
`;

export default RecruitmentMajor;
