import styled from "styled-components";
import { NoticeGetArrayType, NoticePropsType } from "../../types/type";

interface Notices {
  notices: NoticePropsType;
}

export const Notice: React.FC<Notices> = ({ notices }) => {
  const MajorLabel = (major: string) => {
    switch (major) {
      case "FRONT":
        return "프론트엔드";
      case "BACK":
        return "백엔드";
      case "SECURITY":
        return "보안";
      case "IOS":
        return "아이오에스";
      case "AND":
        return "안드로이드";
      case "FLUTTER":
        return "플러터";
      case "EMBEDDED":
        return "임베디드";
      case "AI":
        return "인공지능";
      case "DEVOPS":
        return "데브옵스";
      case "DESIGN":
        return "디자인";
      case "GAME":
        return "게임개발";
      default:
        return "미정";
    }
  };
  return (
    <Container>
      {notices.notices &&
        notices.notices.map((notice: NoticeGetArrayType, index: number) => (
          <>
            <ClubName key={index}>{notice.clubName}</ClubName>
            <DateWrapper>
              <Text>
                <NoticeTitle>{notice.noticeTitle}</NoticeTitle>
                <Major>{MajorLabel(notice.major)}</Major>
              </Text>
              <Date>
                {notice.recruitDay.startDay} ~ {notice.recruitDay.endDay}
              </Date>
            </DateWrapper>
            <Button>지원하기</Button>
          </>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1154px;
  height: 167px;
  background-color: #ffffff;
  padding: 37px 50px;
  border-top: 0.5px solid #d9d9d9;
  border-bottom: 0.5px solid #d9d9d9;
`;

const ClubName = styled.p`
  color: #f46254;
  font-size: 16px;
  font-weight: 500;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Date = styled.p`
  color: #4e5968;
  font-size: 14px;
  font-weight: 500;
`;

const NoticeTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Major = styled.p`
  color: #4e5968;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 110px;
  height: 30px;
  border-radius: 4px;
  background: #f46254;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
