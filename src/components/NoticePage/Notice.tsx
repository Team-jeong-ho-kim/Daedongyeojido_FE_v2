import styled from "styled-components";
import { NoticeGetArrayType, NoticePropsType } from "../../types/type";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../../utils/cookie";

interface Notices {
  notices: NoticePropsType;
  selectedMajor: string;
  searches: string;
}

export const Notice: React.FC<Notices> = ({
  notices,
  selectedMajor,
  searches,
}) => {
  const link = useNavigate();
  const accessToken = Cookie.get("accessToken");
  const MajorLabel = (major: string) => {
    switch (major) {
      case "FRONT":
        return "프론트엔드";
      case "BACK":
        return "백엔드";
      case "SECURITY":
        return "정보 보안";
      case "IOS":
        return "IOS";
      case "AND":
        return "안드로이드";
      case "FLUTTER":
        return "플러터";
      case "EMBEDDED":
        return "임베디드";
      case "AI":
        return "AI";
      case "DEVOPS":
        return "DevOps";
      case "DESIGN":
        return "디자인";
      case "GAME":
        return "게임";
      default:
        return "미정";
    }
  };

  const MajorLevel = (major: string) => {
    switch (major) {
      case "FRONT":
        return "FRONT";
      case "BACK":
        return "BACK";
      case "SECURITY":
        return "SECURITY";
      case "IOS":
        return "IOS";
      case "AND":
        return "AND";
      case "FLUTTER":
        return "FLUTTER";
      case "EMBEDDED":
        return "EMBEDDED";
      case "AI":
        return "AI";
      case "DEVOPS":
        return "DEVOPS";
      case "DESIGN":
        return "DESIGN";
      case "GAME":
        return "GAME";
      default:
        return "UNDEFINED";
    }
  };

  return (
    <Container>
      {notices.notices &&
        notices.notices.map((notice: NoticeGetArrayType, index: number) => {
          return selectedMajor == "UNDEFINED" ? (
            searches == "" ? (
              <Wrapper>
                <ClubName key={index}>{notice.clubName}</ClubName>
                <DateWrapper>
                  <Text>
                    <NoticeTitle>{notice.noticeTitle}</NoticeTitle>
                    {notice.major.map((majors) => (
                      <Major>{MajorLabel(majors)}</Major>
                    ))}
                  </Text>
                  <Date>
                    {notice.recruitDay.startDay} ~ {notice.recruitDay.endDay}
                  </Date>
                </DateWrapper>
                <Button
                  onClick={() => {
                    if (!accessToken) {
                      alert("로그인 해주세요");
                      return;
                    }
                    link(`/NoticeDetails/${notice.id}`);
                  }}>
                  지원하기
                </Button>
              </Wrapper>
            ) : (
              (notice.clubName.toLowerCase().includes(searches.toLowerCase()) ||
                notice.noticeTitle
                  .toLowerCase()
                  .includes(searches.toLowerCase()) ||
                notice.major.filter((m) => MajorLabel(m).includes(searches))
                  .length >= 1) && (
                <Wrapper>
                  <ClubName key={index}>{notice.clubName}</ClubName>
                  <DateWrapper>
                    <Text>
                      <NoticeTitle>{notice.noticeTitle}</NoticeTitle>
                      {notice.major.map((majors) => (
                        <Major>{MajorLabel(majors)}</Major>
                      ))}
                    </Text>
                    <Date>
                      {notice.recruitDay.startDay} ~ {notice.recruitDay.endDay}
                    </Date>
                  </DateWrapper>
                  <Button onClick={() => link(`/NoticeDetails/${notice.id}`)}>
                    지원하기
                  </Button>
                </Wrapper>
              )
            )
          ) : (
            notice.major.includes(MajorLevel(selectedMajor)) && (
              <Wrapper>
                <ClubName key={index}>{notice.clubName}</ClubName>
                <DateWrapper>
                  <Text>
                    <NoticeTitle>{notice.noticeTitle}</NoticeTitle>
                    {notice.major.map((majors) => (
                      <Major>{MajorLabel(majors)}</Major>
                    ))}
                  </Text>
                  <Date>
                    {notice.recruitDay.startDay} ~ {notice.recruitDay.endDay}
                  </Date>
                </DateWrapper>
                <Button onClick={() => link(`/NoticeDetails/${notice.id}`)}>
                  지원하기
                </Button>
              </Wrapper>
            )
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1154px;
  background-color: #ffffff;
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
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
  width: 75px;
`;

const DateWrapper = styled.div`
  display: flex;
  width: 750px;
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
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
