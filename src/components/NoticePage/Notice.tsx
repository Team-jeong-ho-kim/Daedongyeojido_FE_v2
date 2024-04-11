import styled, { keyframes } from "styled-components";
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
        return "AOS";
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
                    <Major1>
                      {notice.major.map((majors) => (
                        <Major>{MajorLabel(majors)}</Major>
                      ))}
                    </Major1>
                  </Text>
                  <Date>
                    {notice.recruitDay.startDay} ~ {notice.recruitDay.endDay}
                  </Date>
                </DateWrapper>
                {!notice.isApply ? (
                  <Button
                    onClick={() => {
                      if (!accessToken) {
                        alert("로그인 해주세요");
                        return;
                      }
                      link(`/NoticeDetails/${notice.id}`);
                    }}
                  >
                    지원하기
                  </Button>
                ) : (
                  <Buttoned>지원됨</Buttoned>
                )}
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
                      <Major1>
                        {notice.major.map((majors) => (
                          <Major>{MajorLabel(majors)}</Major>
                        ))}
                      </Major1>
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
                    <Major1>
                      {notice.major.map((majors) => (
                        <Major>{MajorLabel(majors)}</Major>
                      ))}
                    </Major1>
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

const fadeIn = keyframes`
  0% {
	transform: translateY(100px);
	opacity: 0;
  }
  5% {
	transform: translateY(150px);
	opacity: 0.1;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #ffffff;
  margin-bottom: 80px;
  animation: ${fadeIn} 1s ease forwards;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 167px;
  gap: 10%;
  background-color: #ffffff;
  padding: 37px 50px;
  border-top: 0.5px solid #d9d9d9;
  border-bottom: 0.5px solid #d9d9d9;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const ClubName = styled.p`
  color: #f46254;
  font-size: 16px;
  font-weight: 500;
  width: 11%;
  @media (max-width: 1660px) {
    font-size: 14px;
  }
  @media (max-width: 1560px) {
    font-size: 12px;
  }
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

const Major1 = styled.p`
  display: flex;
  gap: 10px;
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
  transition: scale 0.1s, filter 0.35s ease;
  &:hover {
    filter: invert(30%);
  }
  &:active {
    filter: invert(30%);
    scale: 0.9;
  }
`;

const Buttoned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 110px;
  height: 30px;
  border-radius: 4px;
  background: #c4c7cd;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
