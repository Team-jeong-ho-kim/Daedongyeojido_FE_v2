import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Query } from "../../components/Apply/Query";
import Footer from "../../components/MainPage/Footer";
import { Back } from "../../components/Apply/Back";
import { useEffect, useState } from "react";
import { ApplicationType } from "../../types/type";
import { getApplication } from "../../apis/report";
import { postITVresult } from "../../apis/alarm";
import { useParams } from "react-router-dom";
import { deleteApply } from "../../apis/report";

export const ApplicationQueryPage = () => {
  const { id } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationType>();
  const [cla, setCla] = useState<string>("");

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleApplyCancel = () => {
    if (id) {
      if (confirm("정말 지원을 취소하시겠습니까?")) {
        deleteApply(parseInt(id));
        window.location.href = "/My";
      }
    }
  };

  const handlePassW = () => {
    if (confirm(`정말 ${data?.name} 학생을 서류합격시키겠습니까?`)) {
      if (id) {
        const reportId = parseInt(id);
        postITVresult({
          reportId: reportId,
          passingResult: "PASS",
          alarmType: "REPORT_PASS_RESULT",
        });
      }
    }
  };

  const handleFailL = () => {
    if (confirm(`정말 ${data?.name} 학생을 불합격시키겠습니까?`)) {
      if (id) {
        const reportId = parseInt(id);
        postITVresult({
          reportId: reportId,
          passingResult: "FAIL",
          alarmType: "REPORT_PASS_RESULT",
        });
      }
    }
  };

  useEffect(() => {
    if (id) {
      getApplication(parseInt(id)).then((res) => {
        setData(res.data);
        console.log(res.data);
        if (data) {
          setCla(data.isApply ? "APPLYER" : "INDEPENDENT");
        }
      });
    }
  }, []);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Back />
        <Top>
          <Headi>
            <div>
              <Title>지원서 보기</Title>
              <Content>
                동아리에 관심있는 신입생 학생의 지원서 입니다.
                <br />
                아래 답변을 보고 동아리에 맞는 인재상을 찾아보세요.
              </Content>
            </div>
            <Cover>
              <Cancel
                onClick={handleApplyCancel}
                usable={cla == "APPLYER" ? "applyer" : "none"}
              ></Cancel>
              <Pass
                onClick={handlePassW}
                usable={cla == "CLUB_LEADER" ? "clubLeader" : "none"}
              >
                합격
              </Pass>
              <Fail
                onClick={handleFailL}
                usable={cla == "CLUB_LEADER" ? "clubLeader" : "none"}
              >
                불합격
              </Fail>
            </Cover>
          </Headi>
        </Top>
        {data && <Query info={data} />}
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Headi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Cover = styled.div`
  display: flex;
  gap: 9px;
`;

const Cancel = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "applyer" ? "inline-block" : "none")};
  width: 102px;
  height: 36px;
  border-radius: 10px;
  background-color: #52565d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.014px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Pass = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) =>
    usable == "clubLeader" ? "inline-block" : "none"};
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #333b3d;
  background-color: #f3f4f5;
  color: #333b3d;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Fail = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) =>
    usable == "clubLeader" ? "inline-block" : "none"};
  width: 145px;
  height: 40px;
  border-radius: 10px;
  background-color: #333b3d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Top = styled.div`
  height: 208px;
  display: flex;
  align-items: end;
  padding-bottom: 34px;
  gap: 49%;
  margin-left: 10%;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
