import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Query } from "../../components/Apply/Query";
import Footer from "../../components/MainPage/Footer";
import { Back } from "../../components/Apply/Back";
import { useEffect, useState } from "react";
import { ApplicationType } from "../../types/type";
import { getApplication } from "../../apis/report";
import { cancelAlarm, postITVresult } from "../../apis/alarm";
import { useParams, useNavigate } from "react-router-dom";
import { deleteApply } from "../../apis/report";
import { Cookie } from "../../utils/cookie";

export const ApplicationQueryPage = () => {
  const { id } = useParams();
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<"PASS" | "FAIL">();
  const [data, setData] = useState<ApplicationType>();
  const part = Cookie.get("part");
  const link = useNavigate();

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleApplyCancel = () => {
    if (id) {
      if (confirm("정말 지원을 취소하시겠습니까?")) {
        deleteApply(parseInt(id));
        link("/My");
      }
    }
  };

  const handlePassW = () => {
    if (!data || !id) return;

    if (data?.reportPassingResult !== "WAIT") {
      if (
        confirm(
          `정말 ${data.name}님의 ${
            data?.reportPassingResult === "PASS" ? "합격" : "탈락"
          }여부를\n취소하시겠습니까?`
        )
      ) {
        cancelAlarm({
          reportId: parseInt(id),
          classNumber: parseInt(data.classNumber),
          alarmType: "REPORT_PASS_RESULT",
        }).then(() => {
          getApplication(parseInt(id)).then((res) => {
            setData(res.data);
            setSelected(res.data.reportPassingResult);
            console.log(res.data);
          });
          alert("면접 결과가 취소 되었습니다");
        });
        return;
      } else {
        return;
      }
    }

    if (confirm(`정말 ${data?.name} 학생을 서류합격시키겠습니까?`)) {
      if (id) {
        const reportId = parseInt(id);
        postITVresult({
          reportId: reportId,
          passingResult: "PASS",
          alarmType: "REPORT_PASS_RESULT",
        }).then(() => {
          getApplication(parseInt(id)).then((res) => {
            setData(res.data);
            setSelected(res.data.reportPassingResult);
            console.log(res.data);
          });
        });
      }
    }
    setSelected("PASS");
  };

  const handleFailL = () => {
    if (!data || !id) return;

    if (data?.reportPassingResult !== "WAIT") {
      if (
        confirm(
          `정말 ${data.name}님의 ${
            data?.reportPassingResult === "PASS" ? "합격" : "탈락"
          }여부를\n취소하시겠습니까?`
        )
      ) {
        cancelAlarm({
          reportId: parseInt(id),
          classNumber: parseInt(data.classNumber),
          alarmType: "REPORT_PASS_RESULT",
        }).then(() => {
          getApplication(parseInt(id)).then((res) => {
            setData(res.data);
            setSelected(res.data.reportPassingResult);
            console.log(res.data);
          });
          alert("면접 결과가 취소 되었습니다");
        });
        return;
      } else {
        return;
      }
    }

    if (confirm(`정말 ${data?.name} 학생을 불합격시키겠습니까?`)) {
      if (id) {
        const reportId = parseInt(id);
        postITVresult({
          reportId: reportId,
          passingResult: "FAIL",
          alarmType: "REPORT_PASS_RESULT",
        }).then(() => {
          getApplication(parseInt(id)).then((res) => {
            setData(res.data);
            setSelected(res.data.reportPassingResult);
            console.log(res.data);
          });
        });
      }
    }
    setSelected("FAIL");
  };

  // const handleCancel = () => {};

  useEffect(() => {
    if (id) {
      getApplication(parseInt(id))
        .then((res) => {
          setData(res.data);
          setSelected(res.data.reportPassingResult);
          console.log(res.data);
        })
        .catch((err) => console.error(err));
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
              {part === "INDEPENDENT" ? (
                <Cancel onClick={handleApplyCancel}>취소하기</Cancel>
              ) : null}
              {part === "CLUB_LEADER" || part === "ADMIN" ? (
                <ButtonWrapper>
                  <Pass onClick={handlePassW} selected={selected === "PASS"}>
                    합격
                  </Pass>
                  <Fail onClick={handleFailL} selected={selected === "FAIL"}>
                    불합격
                  </Fail>
                </ButtonWrapper>
              ) : null}
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
  width: 1462px;
  align-items: flex-end;
`;

const Cover = styled.div`
  display: flex;
  gap: 9px;
`;

const Cancel = styled.button`
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
  transition: filter 0.2s, scale 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(70%);
    scale: 0.9;
  }
`;

const Pass = styled.button<{ selected: boolean }>`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  transition: filter 0.2s, scale 0.2s, background-color 0.2s, color 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(100%);
    background-color: #333b3d;
    color: #fff;
    scale: 0.9;
  }
`;

const Fail = styled.button<{ selected: boolean }>`
  width: 145px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  transition: filter 0.2s, scale 0.2s, background 0.2s, color 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(100%);
    background-color: #333b3d;
    color: #fff;
    scale: 0.9;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Top = styled.div`
  width: 78%;
  height: 208px;
  display: flex;
  align-items: end;
  padding-bottom: 34px;
  justify-content: space-between;
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
