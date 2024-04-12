import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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

  const handleFocus = () => {
    setData({
      ...data,
      phoneNumber: "",
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith("010")) {
      setData({
        ...data,
        phoneNumber: `010-${inputValue.slice(0, 4)}-${inputValue.slice(4, 8)}`,
      });
    }
    if (inputValue == "010" || inputValue.length < 10) {
      setData({
        ...data,
        phoneNumber: "",
      });
    } else if (inputValue.length == 10) {
      setData({
        ...data,
        phoneNumber: `010-${inputValue.slice(3, 6)}-${inputValue.slice(6, 10)}`,
      });
    } else if (inputValue.length == 11) {
      setData({
        ...data,
        phoneNumber: `010-${inputValue.slice(3, 7)}-${inputValue.slice(7, 11)}`,
      });
    }
  };

  const handlePNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      if (
        !inputValue.startsWith("010") &&
        !inputValue.startsWith("01") &&
        !inputValue.startsWith("0")
      ) {
        setData({
          ...data,
          phoneNumber: `010${inputValue}`,
        });
        return;
      }
      if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11);
      }
      setData({
        ...data,
        phoneNumber: inputValue,
      });
    }
  };

  const onAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    if (
      data.name &&
      data.phoneNumber &&
      data.inquiryType &&
      data.inquiryContent
    ) {
      createInquiry({
        name: data.name,
        phoneNumber: data.phoneNumber.replace(/-/g, ""),
        inquiryType: data.inquiryType,
        inquiryContent: data.inquiryContent,
      })
        .then(() => {
          alert("성공적으로 문의 되었습니다");
          window.location.replace("/");
        })
        .catch(() => {
          alert("나중에 다시 시도해주세요");
          // window.location.replace("/");
        });
    } else if (data.name == "") alert("작성자 본인의 이름을 입력해주세요.");
    else if (data.phoneNumber == "")
      alert("작성자 본인의 휴대폰 번호를 입력해주세요.");
    else if (data.inquiryContent == "")
      alert("문의 내용을 상세히 입력해주세요.");
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
            onChange={handlePNChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.phoneNumber}
          />
        </InputWrapper>
        <InputWrapper>
          <Text>문의 종류</Text>
          <Select
            name="inquiryType"
            value={data.inquiryType}
            onChange={onChange}
          >
            <option value="SERVER">서버 오류</option>
            <option value="CLIENT">클라이언트 오류</option>
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

const fadeIn = keyframes`
  0% {
	transform: translateY(-30px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 789px;
  gap: 35px;
  margin-left: 20%;
  animation: ${fadeIn} 1s;
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
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #eaecef;
  cursor: text;
`;

const Select = styled.select`
  width: 200px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid #eaecef;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 53%;
  height: 285px;
  resize: none;
  padding: 16px 18px;
  border-radius: 10px;
  background: #f6f7f8;
  color: #52585c;
  font-weight: 500;
  font-size: 18px;
  cursor: text;
  &::placeholder {
    color: #818181;
    font-size: 18px;
    font-weight: 500;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const Button = styled.button`
  width: 7.1%;
  height: 49px;
  border-radius: 4px;
  background: #52565d;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-left: 46%;
  cursor: pointer;
  transition: filter 0.2s ease, scale 0.2s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(70%);
    scale: 0.9;
  }
`;
