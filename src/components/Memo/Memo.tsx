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
    if (memo?.interviewPassingResult !== "WAIT") return;

    if (confirm(`정말 ${memo?.name} 학생을 최종합격시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "PASS",
          alarmType: "INTERVIEW_PASS_RESULT",
        });
      }
    }
  };

  const handleULTFail = () => {
    if (memo?.interviewPassingResult !== "WAIT") return;

    if (confirm(`정말 ${memo?.name} 학생을 최종탈락시키겠습니까?`)) {
      if (reportId) {
        postITVresult({
          reportId: reportId,
          passingResult: "FAIL",
          alarmType: "INTERVIEW_PASS_RESULT",
        });
      }
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
          {memo.classNumber} {memo.name} {memo.major} 면접 기록
        </Title>
        <BtnWrapper>
          <ButtonPass onClick={handleULTPass}>합격</ButtonPass>
          <ButtonFail onClick={handleULTFail}>불합격</ButtonFail>
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

const ButtonPass = styled.button`
  width: 130px;
  height: 40px;
  color: #000;
  border-radius: 10px;
  border: 1px solid #333b3d;
  background-color: #f3f4f5;
  font-size: 14px;
  cursor: pointer;
`;

const ButtonFail = styled.button`
  width: 145px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  background-color: #333b3d;
  cursor: pointer;
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
`;
