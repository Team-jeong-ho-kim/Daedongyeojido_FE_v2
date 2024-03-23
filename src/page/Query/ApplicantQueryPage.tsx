import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Back } from "../../components/Apply/Back";
import { Query } from "../../components/Query/Query";
import Footer from "../../components/MainPage/Footer";
import { ApplicantType } from "../../types/type";
import { useEffect, useState } from "react";
import { getApplicant } from "../../apis/report";

export const ApplicantQueryPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [query, setQuery] = useState<ApplicantType[]>();
  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    getApplicant("대동여지도").then((res) => {
      setQuery(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
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
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const ApplicantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-left: 10.5%;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 401px 401px 401px);
  column-gap: 53px;
  row-gap: 45px;
  width: 1462px;
  border-radius: 10px;
  border: 3px solid #eaecef;
  padding: 50px 75px;
`;
