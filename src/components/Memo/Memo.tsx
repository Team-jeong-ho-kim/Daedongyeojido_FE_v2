import { useEffect, useState } from "react";
import styled from "styled-components";
import { MemoGetType, MajorType } from "../../types/type";
import { getMemoData, patchModifyMemo } from "../../apis/report";
import { cancelAlarm, postITVresult } from "../../apis/alarm";

export const Memo = ({ reportId }: { reportId: number }) => {
  const [memo, setMemo] = useState<MemoGetType>({
    classNumber: "",
    name: "",
    major: "UNDEFINED",
    interviewPassingResult: "WAIT",
    memo: "",
  });

  const handleSave = () => {
    patchModifyMemo({
      reportId: reportId,
      memo: memo.memo,
    });
    alert("저장되었습니다.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMemo({
      ...memo,
      memo: value,
    });
  };

  const handleULTPass = () => {
    if (memo?.interviewPassingResult !== "WAIT") {
      if (
        confirm(
          `정말 ${memo.name}님의 ${
            memo.interviewPassingResult === "PASS" ? "합격" : "탈락"
          }여부를\n취소하시겠습니까?`
        )
      ) {
        cancelAlarm({
          reportId: reportId,
          classNumber: parseInt(memo.classNumber),
          alarmType: "INTERVIEW_PASS_RESULT",
        }).then(() => {
          getMemoData(reportId).then((res) => {
            setMemo(res.data);
            console.log(res.data);
          });
          alert("면접 결과가 취소 되었습니다");
        });
        return;
      } else {
        return;
      }
    }

    if (confirm(`정말 ${memo?.name} 학생을 최종합격시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "PASS",
          alarmType: "INTERVIEW_PASS_RESULT",
        }).then(() => {
          getMemoData(reportId).then((res) => {
            setMemo(res.data);
            console.log(res.data);
          });
        });
      }
    }
  };

  const handleULTFail = () => {
    if (memo?.interviewPassingResult !== "WAIT") {
      if (
        confirm(
          `정말 ${memo.name}님의 ${
            memo.interviewPassingResult === "PASS" ? "합격" : "탈락"
          }여부를\n취소하시겠습니까?`
        )
      ) {
        cancelAlarm({
          reportId: reportId,
          classNumber: parseInt(memo.classNumber),
          alarmType: "INTERVIEW_PASS_RESULT",
        }).then(() => {
          getMemoData(reportId).then((res) => {
            setMemo(res.data);
            console.log(res.data);
          });
          alert("면접 결과가 취소 되었습니다");
        });
        return;
      } else {
        return;
      }
    }

    if (confirm(`정말 ${memo?.name} 학생을 최종탈락시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "FAIL",
          alarmType: "INTERVIEW_PASS_RESULT",
        }).then(() => {
          getMemoData(reportId).then((res) => {
            setMemo(res.data);
            console.log(res.data);
          });
        });
      }
    }
  };

  const majorType = (major: MajorType) => {
    switch (major) {
      case "AI":
        return "AI";
      case "AND":
        return "AOS";
      case "BACK":
        return "백엔드";
      case "DESIGN":
        return "디자인";
      case "DEVOPS":
        return "DevOps";
      case "EMBEDDED":
        return "임베디드";
      case "FLUTTER":
        return "플러터";
      case "FRONT":
        return "프론트엔드";
      case "GAME":
        return "게임";
      case "IOS":
        return "IOS";
      case "SECURITY":
        return "보안";
      case "UNDEFINED":
        return "미정";
      default:
        return "없음";
    }
  };

  useEffect(() => {
    if (reportId) {
      getMemoData(reportId).then((res) => {
        setMemo(res.data);
        console.log(res.data);
      });
    }
  }, []);
  return (
    <Container>
      <TopWrapper>
        <Title>
          {memo.classNumber} {memo.name} {majorType(memo.major)} 면접 기록
        </Title>
        <BtnWrapper>
          <ButtonPass
            onClick={handleULTPass}
            selected={memo.interviewPassingResult === "PASS"}
          >
            합격
          </ButtonPass>
          <ButtonFail
            onClick={handleULTFail}
            selected={memo.interviewPassingResult === "FAIL"}
          >
            불합격
          </ButtonFail>
        </BtnWrapper>
      </TopWrapper>
      <Record
        placeholder="면접 내용을 기록해보세요."
        onChange={handleChange}
        value={memo.memo}
      />
      <Foot>
        <ButtonSave onClick={handleSave}>저장하기</ButtonSave>
      </Foot>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 1010px;
  justify-content: center;
  align-items: center;
`;

const TopWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const ButtonPass = styled.button<{ selected: boolean }>`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
  font-size: 14px;
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

const ButtonFail = styled.button<{ selected: boolean }>`
  width: 145px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
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

const Record = styled.textarea`
  width: 70%;
  height: 700px;
  font-size: 24px;
  font-weight: 500;
  border-radius: 20px;
  border: 2px solid #eaecef;
  color: #2f3239;
  padding: 30px;
  cursor: text;
  transition: border 0.5s ease;
  resize: none;
  &::placeholder {
    font-size: 20px;
    color: #b0b0b0;
  }
  &:hover,
  &:focus {
    border: 2px solid #2f3239;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const Foot = styled.button`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
`;

const ButtonSave = styled.button`
  width: 159px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  border-radius: 10px;
  background-color: #333b3d;
  cursor: pointer;
  transition: filter 0.2s, scale 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(100%);
    scale: 0.9;
  }
`;
