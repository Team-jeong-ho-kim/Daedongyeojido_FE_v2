import { useEffect, useState } from "react";
import styled from "styled-components";
import { MemoGetType } from "../../types/type";
import { getMemoData, patchModifyMemo } from "../../apis/report";
import { postITVresult } from "../../apis/alarm";

export const Memo = ({ reportId }: { reportId: number }) => {
  const [memo, setMemo] = useState<MemoGetType>({
    classNumber: "",
    name: "",
    major: "UNDEFINED",
    interviewPassingResult: "WAIT",
    memoContent: "",
  });
  const [selected, setSelected] = useState<"pass" | "fail">();

  const handleSave = () => {
    if (memo?.memoContent)
      patchModifyMemo({
        reportId: reportId,
        memo: memo?.memoContent,
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMemo({
      ...memo,
      memoContent: value,
    });
  };

  const handleULTPass = () => {
    if (confirm(`정말 ${memo?.name} 학생을 최종합격시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "PASS",
          alarmType: "INTERVIEW_PASS_RESULT",
        });
      }
    }
    setSelected("pass");
  };

  const handleULTFail = () => {
    if (confirm(`정말 ${memo?.name} 학생을 최종탈락시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "FAIL",
          alarmType: "INTERVIEW_PASS_RESULT",
        });
      }
    }
    setSelected("fail");
  };

  useEffect(() => {
    if (reportId) {
      getMemoData(reportId).then((res) => {
        setMemo(res.data);
        console.log(res.data);
      });
    }
  });
  return (
    <Container>
      <TopWrapper>
        <Title>
          {memo?.classNumber} {memo?.name} {memo?.major} 면접 기록
        </Title>
        <BtnWrapper>
          <ButtonPass onClick={handleULTPass} selected={selected === "pass"}>
            합격
          </ButtonPass>
          <ButtonFail onClick={handleULTFail} selected={selected === "fail"}>
            불합격
          </ButtonFail>
        </BtnWrapper>
      </TopWrapper>
      <Record
        placeholder="면접 내용을 기록해보세요."
        onChange={handleChange}
        value={memo?.memoContent}
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
  font-size: 28px;
  font-weight: 700;
`;

const ButtonPass = styled.button<{ selected: boolean }>`
  width: 130px;
  height: 40px;
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
`;

const ButtonFail = styled.button<{ selected: boolean }>`
  width: 145px;
  height: 40px;
  color: ${({ selected }) => (selected ? "#fff" : "#333b3d")};
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#333b3d" : "#f3f4f5")};
  border: ${({ selected }) => (selected ? "none" : "1px solid #333b3d")};
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
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

const Foot = styled.button`
  width: 1591px;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
`;

const ButtonSave = styled.button`
  width: 159px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  background-color: #333b3d;
  cursor: pointer;
`;
