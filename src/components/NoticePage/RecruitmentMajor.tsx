import styled from "styled-components";
import { NoticeFieldType } from "../../types/type";

const RecruitmentMajor = ({ major, todo }: NoticeFieldType) => {
  return (
    <Container>
      <Major>{major}</Major>
      <Ideal>{todo}</Ideal>
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
