import React, { useState } from "react";
import styled from "styled-components";
import { createInquiry } from "../../apis/inquiry";
import { InquiryPostType } from "../../types/type";

export const Ask = () => {
  const [data, setData] = useState<InquiryPostType>({
    name: "",
    phoneNumber: "",
    inquiryType: "SERVER", // 초기값을 'server'로 설정
    inquiryContent: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    createInquiry(data)
      .then(() => {
        alert("성공적으로 문의 되었습니다");
        window.location.replace("/");
      })
      .catch(() => {
        alert("나중에 다시 시도해주세요");
        // window.location.replace("/");
      });
  };

  return (
    <Container>
      <Title>문의하기</Title>
      <TopWrapper>
        <InputWrapper>
          <Text>이름</Text>
          <Input
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={onChange}
            value={data.name}
          />
        </InputWrapper>
        <InputWrapper>
          <Text>전화번호</Text>
          <Input
            placeholder="전화번호를 입력해주세요"
            name="phoneNumber"
            onChange={onChange}
            value={data.phoneNumber}
          />
        </InputWrapper>
        <InputWrapper>
          <Text>문의 종류</Text>
          <Select
            name="inquiryType"
            value={data.inquiryType}
            onChange={onChange}>
            <option disabled hidden>
              문의 종류를 선택해주세요
            </option>
            <option value="SERVER">서버오류</option>
            <option value="CLIENT">클라오류</option>
          </Select>
        </InputWrapper>
      </TopWrapper>
      <InputWrapper>
        <Text>문의 내용</Text>
        <Textarea
          placeholder="내용을 입력해주세요"
          name="inquiryContent"
          onChange={onAreaChange}
          value={data.inquiryContent}
        />
      </InputWrapper>
      <Button onClick={onClick}>문의하기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 789px;
  gap: 35px;
  margin-left: 20%;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 90px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 200px;
  height: 24px;
  border-bottom: 1px solid #eaecef;
`;

const Select = styled.select`
  width: 200px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid #eaecef;
`;

const Textarea = styled.textarea`
  width: 1014px;
  height: 285px;
  resize: none;
  padding: 16px 18px;
  border-radius: 10px;
  background: #f6f7f8;
  color: #52585c;
  font-size: 25px;
  font-weight: 500;
  & ::placeholder {
    color: #818181;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Button = styled.div`
  width: 134px;
  height: 49px;
  padding: 12px 30px;
  border-radius: 4px;
  background: #52565d;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-left: 46%;
`;
