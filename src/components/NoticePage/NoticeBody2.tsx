import styled from "styled-components";
import Notice from "./Notice";

const NoticeBody2 = () => {
  return (
    <>
      <NoticeBox>
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
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
