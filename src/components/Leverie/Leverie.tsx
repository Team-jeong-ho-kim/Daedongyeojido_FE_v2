import React, { useState } from "react";
import styled from "styled-components";
import { AnnouncementType } from "../../types/type";
import { createAnnouncement } from "../../apis/announcement";

export const Leverie = () => {
  const [data, setData] = useState<AnnouncementType>({
    title: "",
    contents: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    createAnnouncement(data)
      .then(() => {
        alert("공지가 완료되었습니다");
      })
      .catch(() => {
        alert("공지에 실패했습니다, 나중에 다시 시도해주세요");
      });
  };

  return (
    <Container>
      <div>
        <Title>공지하기</Title>
        <Content>레벨리를 위한 기능인 공지하기 입니다.</Content>
      </div>
      <InputWrapper>
        <Text>제목</Text>
        <Input
          placeholder="제목을 입력해주세요"
          name="title"
          onChange={onChange}
          value={data.title}
        />
      </InputWrapper>
      <InputWrapper>
        <Text>공지 내용</Text>
        <Textarea
          placeholder="내용을 입력해주세요"
          name="contents"
          onChange={onChange}
          value={data.contents}
        />
      </InputWrapper>
      <Button onClick={onClick}>공지하기</Button>
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

const Content = styled.p`
  color: #818181;
  font-size: 14px;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 1014px;
  height: 51px;
  border-radius: 10px;
  background: #f6f7f8;
  padding: 17px;
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
