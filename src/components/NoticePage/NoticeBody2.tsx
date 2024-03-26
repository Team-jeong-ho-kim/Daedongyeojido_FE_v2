import styled from "styled-components";
import Notice from "./Notice";
import { NoticePropsType } from "../../types/type";
import { useNavigate } from "react-router-dom";

const NoticeBody2 = ({ notices }: NoticePropsType) => {
  const link = useNavigate();

  return (
    <>
      <NoticeBox>
        {notices &&
          notices.map((notice) => {
            return (
              <div
                onClick={() => {
                  link(`/NoticeDetails/${notice.id}`);
                }}>
                <Notice
                  key={notice.id}
                  clubImageUrl={notice.clubImageUrl}
                  clubName={notice.clubName}
                  recruitDay={notice.recruitDay}
                  noticeTitle={notice.noticeTitle}
                  id={notice.id}
                />
              </div>
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
