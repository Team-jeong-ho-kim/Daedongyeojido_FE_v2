import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import INT from "../components/MyPage/interviewSchedule";
import ProfileNone from "../assets/img/PNG/Profile.png";
import Edit from "../assets/img/PNG/Edit.png";
import Login from "../components/Header/Login";
import { getAnnouncement } from "../apis/announcement";
import { AnnouncementType } from "../types/type";
import { AnnounceBox } from "../components/MyPage/Announce";
import { getMyInfo, updataProfile } from "../apis/user";
import { MyInfoType, MajorType } from "../types/type";
import { PassingResultType } from "../types/type";
import { handleImageChange } from "../utils/handleImageChange";
import { createImage } from "../apis/image";
import { getMyAlarm } from "../apis/alarm";
import { MyAlarmType } from "../types/type";
import { Cookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [page, setPage] = useState<string>("Announce");
  const [getAlarm, setGetAlarm] = useState<MyAlarmType[]>();
  const [getAnnounce, setGetAnnounce] = useState<AnnouncementType[]>();
  const [ivsdSelect, setIvsdSelect] = useState<boolean>(false);
  const [image, setImage] = useState<Blob | null>(null);
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [data, setData] = useState<MyInfoType>();
  const [itvScdl, setItvScdl] = useState<number>();
  const [myMajor, setMyMajor] = useState<string>("");
  const link = useNavigate();

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handlePfEdit = () => {
    const fileInput: HTMLElement | null = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileInputChange = (event: any) => {
    handleImageChange(event, setImage);
  };

  useEffect(() => {
    if (!image) return;
    createImage(image).then((res) => {
      updataProfile(res.data.imageUrl).then(() => {
        window.location.reload();
      });
    });
  }, [image]);

  const handleItvToggle = () => {
    setIvsdSelect(false);
  };

  const handleIvsdSelectToggle = (id: number) => {
    setItvScdl(id);
    setIvsdSelect(true);
  };

  useEffect(() => {
    if (itvScdl) {
      console.log(itvScdl);
      handleItvToggle();
    }
  }, [itvScdl]);

  const handlePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetId = e.target as HTMLDivElement;
    const lastPage = targetId.id;
    if (lastPage != page) setPage(lastPage);
  };

  const handleLogout = () => {
    Cookie.remove("accessToken");
    Cookie.remove("refreshToken");
    Cookie.remove("part");
    window.location.href = "/";
  };

  const reportPassingResult = (report: PassingResultType) => {
    switch (report) {
      case "PASS":
        return "합격";
      case "FAIL":
        return "탈락";
      default:
        return "대기";
    }
  };

  const interviewPassingResult = (interview: PassingResultType) => {
    switch (interview) {
      case "PASS":
        return "합격";
      case "FAIL":
        return "탈락";
      default:
        return "대기";
    }
  };

  const alarmType = (alarm: MyAlarmType) => {
    switch (alarm.alarmType) {
      case "REPORT_PASS_RESULT":
        return reportPassingResult(alarm.passingResult) == "합격"
          ? "서류합격"
          : "서류탈락";
      case "INTERVIEW_PASS_RESULT":
        return interviewPassingResult(alarm.passingResult) == "합격"
          ? "면접합격"
          : "면접탈락";
      default:
        return "대기";
    }
  };

  const majorType = (major: MajorType) => {
    switch (major) {
      case "AI":
        return "AI";
      case "AND":
        return "AOS";
      case "BACK":
        return "BackEnd";
      case "DESIGN":
        return "Design";
      case "DEVOPS":
        return "DevOps";
      case "EMBEDDED":
        return "Embedded";
      case "FLUTTER":
        return "Flutter";
      case "FRONT":
        return "FrontEnd";
      case "GAME":
        return "Game";
      case "IOS":
        return "IOS";
      case "SECURITY":
        return "Security";
      case "UNDEFINED":
        return "미정";
      default:
        return "없음";
    }
  };

  const createTimeSet = (date: string) => {
    const today = new Date().getTime();
    const reDate = new Date(date.split(".")[0]).getTime() + 32400000;
    const k = Math.floor(today - reDate);
    if (k >= 31536000000) {
      return `${Math.floor(
        today / (1000 * 60 * 60 * 24 * 365) -
          reDate / (1000 * 60 * 60 * 24 * 365)
      )}년 전`;
    } else if (k >= 2592000000) {
      return `${Math.floor(
        today / (1000 * 60 * 60 * 24 * 30) - reDate / (1000 * 60 * 60 * 24 * 30)
      )}개월 전`;
    } else if (k >= 604800000) {
      return `${Math.floor(
        today / (1000 * 60 * 60 * 24 * 7) - reDate / (1000 * 60 * 60 * 24 * 7)
      )}주 전`;
    } else if (k >= 86400000) {
      return `${Math.floor(
        today / (1000 * 60 * 60 * 24) - reDate / (1000 * 60 * 60 * 24)
      )}일 전`;
    } else if (k >= 3600000) {
      return `${Math.floor(
        today / (1000 * 60 * 60) - reDate / (1000 * 60 * 60)
      )}시간 전`;
    } else if (k >= 60000) {
      return `${Math.floor(today / (1000 * 60) - reDate / (1000 * 60))}분 전`;
    } else {
      return `${Math.floor(today / 1000 - reDate / 1000)}초 전`;
    }
  };

  useEffect(() => {
    getMyInfo()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setMyMajor(res.data.myMajor);

        getMyAlarm()
          .then((res) => {
            console.log(res.data);

            setGetAlarm(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

        getAnnouncement()
          .then((res) => {
            console.log(res.data);

            setGetAnnounce(res.data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const majorP = data?.major;
    if (data) {
      switch (majorP) {
        case "UNDEFINED":
          setMyMajor(
            `${data?.classNumber.slice(0, 1)}학년 ${data.name}입니다.`
          );
          break;
        case "FRONT":
          setMyMajor(`프론트엔드 개발자 ${data.name}입니다.`);
          break;
        case "BACK":
          setMyMajor(`백엔드 개발자 ${data.name}입니다.`);
          break;
        case "IOS":
          setMyMajor(`IOS 개발자 ${data.name}입니다.`);
          break;
        case "AND":
          setMyMajor(`AOS 개발자 ${data.name}입니다.`);
          break;
        case "FLUTTER":
          setMyMajor(`플러터 개발자 ${data.name}입니다.`);
          break;
        case "EMBEDDED":
          setMyMajor(`임베디드 개발자 ${data.name}입니다.`);
          break;
        case "AI":
          setMyMajor(`AI 개발자 ${data.name}입니다.`);
          break;
        case "SECURITY":
          setMyMajor(`보안 개발자 ${data.name}입니다.`);
          break;
        case "DEVOPS":
          setMyMajor(`DevOps ${data.name}입니다.`);
          break;
        case "DESIGN":
          setMyMajor(`디자이너 ${data.name}입니다.`);
          break;
        case "GAME":
          setMyMajor(`게임 개발자 ${data.name}입니다.`);
          break;
        default:
          setMyMajor(`${data.name}입니다.`);
          break;
      }
    }
  }, []);

  return (
    <>
      <Container>
        <Header onLoginToggle={handleLoginToggle} />
        {data && (
          <CenterBox>
            <LeftBox>
              <MyInfo>
                <MyInfoplus>
                  <MyInfo_basic>
                    <MyMainInfo>
                      <MyCover>
                        <MyName>{data.name}</MyName>
                        <ClNum>
                          {data.classNumber == null ? "0000" : data.classNumber}
                        </ClNum>
                      </MyCover>
                      <MyClass>
                        <MyClub>
                          동아리
                          <MyCClub>
                            {data.myClub === "null" ? "없음" : data.myClub}
                          </MyCClub>
                        </MyClub>
                        <MyClub>
                          전공
                          <MyCClub>
                            {data.major && majorType(data.major)}
                          </MyCClub>
                        </MyClub>
                      </MyClass>
                    </MyMainInfo>
                    <ProfileEdit>
                      <Edits onClick={handlePfEdit}>
                        <EditButton src={Edit} />
                      </Edits>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="fileInput"
                        onChange={handleFileInputChange}
                        required
                      />
                      {data.profileImageUrl ? (
                        <Profile src={data.profileImageUrl} />
                      ) : (
                        <Profile src={ProfileNone} />
                      )}
                    </ProfileEdit>
                  </MyInfo_basic>
                  <MyN>{myMajor}</MyN>
                  <LinkerBox>
                    {/* <Linker src={Link} onClick={handleLink} />
                    <MyLink href={ghLink2} target="_blank">
                      {ghLink2}
                    </MyLink> */}
                  </LinkerBox>
                </MyInfoplus>
                <B></B>
                <MyInfo_Menu>
                  <Announce>
                    <Ball3
                      isAnnounce={page == "Announce" ? true : false}
                    ></Ball3>
                    <Text3
                      isAnnounce={page == "Announce" ? true : false}
                      id="Announce"
                      onClick={handlePage}
                    >
                      공지사항
                    </Text3>
                  </Announce>
                  <Alarm>
                    <Ball2 isAlarm={page == "Alarm" ? true : false}></Ball2>
                    <Text2
                      isAlarm={page == "Alarm" ? true : false}
                      id="Alarm"
                      onClick={handlePage}
                    >
                      알림
                    </Text2>
                  </Alarm>
                  <ApplyDetail>
                    <Ball1
                      isApplyDetail={page == "ApplyDetail" ? true : false}
                    ></Ball1>
                    <Text1
                      isApplyDetail={page == "ApplyDetail" ? true : false}
                      id="ApplyDetail"
                      onClick={handlePage}
                    >
                      지원내역
                    </Text1>
                  </ApplyDetail>
                </MyInfo_Menu>
                <B></B>
                <Logout>
                  <LogoutB onClick={handleLogout}>로그아웃</LogoutB>
                </Logout>
              </MyInfo>
            </LeftBox>
            <RightBox>
              {page == "ApplyDetail" && (
                <>
                  <MyName>지원내역</MyName>
                  {data.myReport.length <= 0 ? (
                    <NoApply>
                      <NoAppl>지원내역이 없습니다.</NoAppl>
                      <Opply>
                        자신이 지원한 전공동아리의 지원 내역은 이곳에서 확인
                        가능해요.
                      </Opply>
                    </NoApply>
                  ) : (
                    <Applys>
                      {data.myReport.map((report) => {
                        return (
                          <Apply
                            key={report.id}
                            onClick={() =>
                              link(`/ApplicationQuery/${report.id}`)
                            }
                          >
                            <ApplyDetails>
                              <ApplyName>{report.clubName}</ApplyName>
                              <ApplyData>
                                <ApplyMajor>
                                  {majorType(report.hopeMajor)}
                                </ApplyMajor>
                                <ApplyD>
                                  <ApplyLD>
                                    지원 마감일 : {report.deadline}
                                  </ApplyLD>
                                  {report.interviewStartTime && (
                                    <ApplyIvD>
                                      면접 일시 :{" "}
                                      {report.interviewStartTime.split("T")[0]}{" "}
                                      {
                                        report.interviewStartTime
                                          .split("T")[1]
                                          .split(":")[0]
                                      }
                                      :
                                      {
                                        report.interviewStartTime
                                          .split("T")[1]
                                          .split(":")[1]
                                      }{" "}
                                      ~{" "}
                                      {
                                        report.interviewEndTime
                                          .split("T")[1]
                                          .split(":")[0]
                                      }
                                      :
                                      {
                                        report.interviewEndTime
                                          .split("T")[1]
                                          .split(":")[1]
                                      }
                                    </ApplyIvD>
                                  )}
                                </ApplyD>
                              </ApplyData>
                            </ApplyDetails>
                            <ApplyStatus>
                              서류 :{" "}
                              {reportPassingResult(report.reportPassingResult)}
                              <br />
                              면접 :{" "}
                              {interviewPassingResult(
                                report.interviewPassingResult
                              )}
                            </ApplyStatus>
                          </Apply>
                        );
                      })}
                    </Applys>
                  )}
                </>
              )}
              {page == "Alarm" && (
                <>
                  <MyName>알림</MyName>
                  {getAlarm && getAlarm.length <= 0 ? (
                    <NoAlarm>
                      <NoAppl>알림이 없습니다.</NoAppl>
                      <Opply>알림이 생기면 이곳에서 확인 가능해요.</Opply>
                    </NoAlarm>
                  ) : (
                    <AlarmCenter>
                      {getAlarm &&
                        getAlarm.map((alarm) => {
                          if (alarmType(alarm) === "서류합격") {
                            return (
                              <AlarmPass>
                                <AlarmLT>
                                  {createTimeSet(alarm.createTime)}
                                </AlarmLT>
                                <AlarmName>
                                  <AlarmPC>{alarm.clubName}</AlarmPC>
                                  <AlarmPassed>서류합격</AlarmPassed>
                                  <InterviewScheduleSelect
                                    onClick={() =>
                                      handleIvsdSelectToggle(alarm.reportId)
                                    }
                                  >
                                    면접 시간 선택
                                  </InterviewScheduleSelect>
                                </AlarmName>
                                <AlarmText>
                                  {alarm.userName}님, {alarm.clubName}{" "}
                                  {alarm.major} 분야 서류합격을 축하드려요! 면접
                                  시간을 선택해주세요.
                                </AlarmText>
                              </AlarmPass>
                            );
                          } else if (alarmType(alarm) === "면접합격") {
                            return (
                              <AlarmPass>
                                <AlarmLT>
                                  {createTimeSet(alarm.createTime)}
                                </AlarmLT>
                                <AlarmName>
                                  <AlarmPC>{alarm.clubName}</AlarmPC>
                                  <AlarmPassed>최종합격</AlarmPassed>
                                  <InterviewScheduleSelect onClick={() => {}}>
                                    입부 하기
                                  </InterviewScheduleSelect>
                                  <InterviewScheduleSelect onClick={() => {}}>
                                    지원 취소
                                  </InterviewScheduleSelect>
                                </AlarmName>
                                <AlarmText>
                                  {alarm.userName}님, {alarm.clubName}{" "}
                                  {alarm.major} 분야 최종합격을 축하드려요! 🎉
                                </AlarmText>
                              </AlarmPass>
                            );
                          } else if (alarmType(alarm) === "서류탈락") {
                            return (
                              <AlarmPass>
                                <AlarmLT>
                                  {createTimeSet(alarm.createTime)}
                                </AlarmLT>
                                <AlarmName>
                                  <AlarmPC>{alarm.clubName}</AlarmPC>
                                  <AlarmPassed>서류탈락</AlarmPassed>
                                </AlarmName>
                                <AlarmText>
                                  {alarm.userName}님, 안타깝게도{" "}
                                  {alarm.clubName} {alarm.major} 분야 서류
                                  면접에서 떨어졌어요.
                                </AlarmText>
                              </AlarmPass>
                            );
                          } else if (alarmType(alarm) === "면접탈락") {
                            return (
                              <AlarmPass>
                                <AlarmLT>
                                  {createTimeSet(alarm.createTime)}
                                </AlarmLT>
                                <AlarmName>
                                  <AlarmPC>{alarm.clubName}</AlarmPC>
                                  <AlarmPassed>면접탈락</AlarmPassed>
                                </AlarmName>
                                <AlarmText>
                                  {alarm.userName}님, 아쉽게도 {alarm.clubName}{" "}
                                  {alarm.major} 분야 심층 면접에서 떨어졌어요.
                                  💧
                                </AlarmText>
                              </AlarmPass>
                            );
                          }
                        })}
                    </AlarmCenter>
                  )}
                </>
              )}
              {page === "Announce" && (
                <>
                  <MyName>공지사항</MyName>
                  {getAnnounce && getAnnounce.length <= 0 ? (
                    <NoAnno>
                      <NoAppl>공지사항이 없습니다.</NoAppl>
                      <Opply>공지사항이 생기면 이곳에서 확인 가능해요.</Opply>
                    </NoAnno>
                  ) : (
                    <AnnounceCenter>
                      {getAnnounce &&
                        getAnnounce
                          .slice()
                          .reverse()
                          .map((announce) => (
                            <AnnounceBox
                              title={announce.title}
                              contents={announce.contents}
                            />
                          ))}
                    </AnnounceCenter>
                  )}
                </>
              )}
            </RightBox>
          </CenterBox>
        )}
      </Container>
      {ivsdSelect ? (
        <>
          <Container2></Container2>
          <INT
            handleItvToggle={handleItvToggle}
            reportID={itvScdl ?? 0}
            user={data}
          />
        </>
      ) : null}
      {/* {profileEdit ? true : false} */}
      {isLoginVisible ? <Login onLoginToggle={handleLoginToggle} /> : null}
    </>
  );
};

const fadeIn = keyframes`
  0% {
	transform: translateY(-64px);
	opacity: 0;
  }
  100% {
	transform: translateY(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vw;
  padding-top: 60px;
  position: relative;
`;

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
`;

const CenterBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const LeftBox = styled.div`
  display: flex;
  padding-top: 3.25vw;
  padding-right: 4vw;
  justify-content: flex-end;
  width: 30vw;
  height: 1020px;
  border: 1px solid #eaecef;
  position: fixed;
  left: 0;
`;

const RightBox = styled.div`
  position: absolute;
  width: 70vw;
  min-height: 1020px;
  border: 1px solid #eaecef;
  padding-left: 79px;
  padding-top: 70px;
  user-select: none;
  left: 30vw;
`;

const NoApply = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8vh;
  padding-right: 79px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
  @media screen and (min-width: 2560px) {
    margin-top: 4vh;
  }
  @media screen and (min-width: 3840px) {
    margin-top: 2vh;
  }
`;

const NoAlarm = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8vh;
  padding-right: 79px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
`;

const NoAnno = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8vh;
  padding-right: 79px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
`;

const NoAppl = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`;

const Opply = styled.p`
  color: #acb6bd;
  font-family: "Spoqa Han Sans Neo";
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
`;

const Applys = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 1004px;
  margin-top: 52px;
`;

const Apply = styled.div`
  display: flex;
  width: 1004px;
  justify-content: space-between;
  align-items: center;
  height: 71px;
  border-radius: 6px;
  border: 1px solid #eaecef;
  background-color: #fff;
  animation: ${fadeIn} 1s;
  cursor: pointer;
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: 1.01;
    box-shadow: 1px 1px 1px #d4d6de;
  }
`;

const ApplyDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ApplyName = styled.p`
  display: flex;
  width: 137.8px;
  height: 100%;
  text-align: center;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ApplyData = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ApplyMajor = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  cursor: pointer;
`;

const ApplyD = styled.div`
  display: flex;
  gap: 13.7px;
  cursor: pointer;
`;

const ApplyLD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 150px;
  cursor: pointer;
`;

const ApplyIvD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 227px;
  cursor: pointer;
`;

const ApplyStatus = styled.p`
  color: #4e5558;
  text-align: end;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  width: 96px;
  height: 100%;
  display: flex;
  padding-right: 24px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const AlarmCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 28px 0 100px;
  width: 999px;
`;

const AlarmPass = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  width: 100%;
  height: 90px;
  animation: ${fadeIn} 1s;
  border-radius: 0 5px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0 0 1px #d4d6de;
  }
`;

const AlarmLT = styled.p`
  color: #acb5bd;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  height: 15px;
`;

const AlarmName = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 25px;
`;

const AlarmPC = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

const AlarmPassed = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`;

const InterviewScheduleSelect = styled.button`
  width: 73px;
  height: 18px;
  border-radius: 4px;
  background-color: #c0c1c2;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 8px;
  font-weight: 300;
  line-height: 8px;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(70%);
  }
`;

const AlarmText = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  height: 20px;
`;

const AnnounceCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  margin-top: 86px;
  animation: ${fadeIn} 1s;
`;

const MyInfo = styled.div`
  display: flex;
  width: 299px;
  gap: 16px;
  flex-direction: column;
`;

const MyInfo_basic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const MyInfoplus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
`;

const MyN = styled.p`
  color: #4e555b;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  font-family: "Spoqa Han Sans Neo";
  width: 100%;
  margin: 4px 0 2px;
`;

const LinkerBox = styled.div`
  display: flex;
`;

const MyMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  gap: 8px;
`;

const MyCover = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  margin-bottom: 11px;
`;

const MyName = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 700;
  color: #000;
  height: 39 px;
  padding: 0;
`;

const ClNum = styled.p`
  font-family: Jost;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  color: #000;
  height: 19px;
  text-align: center;
`;

const MyClass = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 2px;
`;

const MyClub = styled.p`
  display: flex;
  color: #4e555b;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  font-family: "Spoqa Han Sans Neo";
  width: auto;
  gap: 3px;
`;

const MyCClub = styled.p`
  width: auto;
  font-weight: 700;
`;

const ProfileEdit = styled.div`
  display: flex;
  align-items: flex-end;
  width: 89px;
  height: 80px;
  position: relative;
  --webkit-user-select: none;
  user-select: none;
`;

const Profile = styled.img`
  position: absolute;
  left: 9px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  --webkit-user-select: none;
`;

const Edits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 33px;
  height: 33px;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 16.5px;
  border: 1px solid #d6d8db;
  z-index: 9;
  cursor: pointer;
  transition: scale 0.1s;
  &:hover {
    scale: 1.15;
  }
  --webkit-user-select: none;
`;

const EditButton = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
  --webkit-user-select: none;
`;

const B = styled.div`
  width: 100%;
  height: 2px;
  border: none;
  background-color: #eaecef;
`;

const MyInfo_Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-left: 20px;
  margin-top: 18px;
  margin-bottom: 22px;
  user-select: none;
`;

const ApplyDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Alarm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Announce = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Ball1 = styled.div<{
  isApplyDetail?: boolean;
}>`
  margin-top: 2px;
  width: 5px;
  height: 5px;
  background-color: ${({ isApplyDetail }) =>
    isApplyDetail ? "#fe4650" : "#acb5bd"};
  border-radius: 5px;
`;

const Text1 = styled.p<{
  isApplyDetail?: boolean;
}>`
  color: ${({ isApplyDetail }) => (isApplyDetail ? "#000" : "#acb5bd")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  background-color: #fff;
  cursor: pointer;
  transition: font-size 0.1s ease;
  &:hover {
    font-size: 20px;
  }
  &:active {
    font-size: 17px;
  }
`;

const Ball2 = styled.div<{
  isAlarm?: boolean;
}>`
  margin-top: 2px;
  width: 5px;
  height: 5px;
  background-color: ${({ isAlarm }) => (isAlarm ? "#fe4650" : "#acb5bd")};
  border-radius: 5px;
`;

const Text2 = styled.p<{
  isAlarm?: boolean;
}>`
  color: ${({ isAlarm }) => (isAlarm ? "#000" : "#acb5bd")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  background-color: #fff;
  cursor: pointer;
  transition: font-size 0.1s ease;
  &:hover {
    font-size: 20px;
  }
  &:active {
    font-size: 17px;
  }
`;

const Ball3 = styled.div<{
  isAnnounce?: boolean;
}>`
  margin-top: 2px;
  width: 5px;
  height: 5px;
  background-color: ${({ isAnnounce }) => (isAnnounce ? "#fe4650" : "#acb5bd")};
  border-radius: 5px;
`;

const Text3 = styled.p<{
  isAnnounce?: boolean;
}>`
  color: ${({ isAnnounce }) => (isAnnounce ? "#000" : "#acb5bd")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  background-color: #fff;
  cursor: pointer;
  transition: font-size 0.1s ease;
  &:hover {
    font-size: 20px;
  }
  &:active {
    font-size: 17px;
  }
`;

const Logout = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  justify-content: flex-end;
  user-select: none;
`;

const LogoutB = styled.button`
  width: 89px;
  height: 100%;
  border-radius: 4px;
  background-color: #52565d;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  transition: filter 0.2s, scale 0.1s;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(100%);
    scale: 0.75;
    background-color: #f00;
  }
`;

export default MyPage;
