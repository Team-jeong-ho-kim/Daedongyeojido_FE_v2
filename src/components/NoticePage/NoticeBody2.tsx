import styled from "styled-components";
import Notice from "./Notice";
import { NoticePropsType } from "../../types/type";

const NoticeBody2 = ({ notices }: NoticePropsType) => {
  return (
    <>
      <NoticeBox>
        {notices &&
          notices.map((notice) => {
            return (
              <Notice
                key={notice.id}
                clubImageUrl={notice.clubImageUrl}
                clubName={notice.clubName}
                recruitDay={notice.recruitDay}
                noticeTitle={notice.noticeTitle}
                id={notice.id}
              />
            );
          })}
      </NoticeBox>
    </>
  );
};

const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 85px 150px;
  gap: 30px;
  flex-wrap: wrap;
`;

export default NoticeBody2;
