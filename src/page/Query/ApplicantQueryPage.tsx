import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Back } from "../../components/Apply/Back";
import { Query } from "../../components/Query/Query";
import Footer from "../../components/MainPage/Footer";
import { ApplicantType } from "../../types/type";
import { useEffect, useState } from "react";
import { getApplicant } from "../../apis/report";
import { useParams } from "react-router-dom";

export const ApplicantQueryPage = () => {
  const { clubName } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [query, setQuery] = useState<ApplicantType[]>([]);
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    if (clubName) {
      getApplicant(clubName).then((res) => {
        setQuery(res.data);
        console.log(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Back />
      <ApplicantWrapper>
        <div>
          <Title>지원자 보기</Title>
          <Content>
            지원자들의 정보, 지원서, 면접 메모, 합격여부를 확인하세요.
          </Content>
        </div>
        <Box>{query && <Query querys={query} />}</Box>
      </ApplicantWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
  width: 100%;
`;

const ApplicantWrapper = styled.div`
  margin-top: 130px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 26px;
  > div:nth-child(1) {
    width: 100%;
    max-width: 1462px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Box = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 401px 401px 401px);
  column-gap: 53px;
  row-gap: 45px; */
  flex-wrap: wrap;
  gap: 53px;
  width: 100%;
  max-width: 1462px;
  border-radius: 10px;
  border: 3px solid #eaecef;
  padding: 50px 75px;
`;
