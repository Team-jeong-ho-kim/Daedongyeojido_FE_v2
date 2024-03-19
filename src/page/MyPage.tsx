import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import INT from "../components/interviewSchedule";
import { DownArrow, ProfileNone } from "../assets";
import { Edit } from "../assets";

const MyPage = () => {
  const [page, setPage] = useState<String>("ApplyDetail");
  const [getApply, setGetApply] = useState<Boolean>(true);
  const [getAlarm, setGetAlarm] = useState<Boolean>(true);
  const [getAnnounce, setGetAnnounce] = useState<Boolean>(true);
  const [ivsdSelect, setIvsdSelect] = useState<Boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const handlePfEdit = () => {
    const fileInput: HTMLElement | null = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileInputChange = (event: any) => {
    const selectedImage = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedImage);
    if (selectedImage) {
      setImage(imageURL);
    }
  };

  const handleIvsdSelectToggle = () => {
    setIvsdSelect(!ivsdSelect);
  };

  const handlePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetId = e.target as HTMLDivElement;
    const lastPage = targetId.id;
    if (lastPage != page) setPage(lastPage);
  };

  return (
    <>
      <Container>
        <Header />
        <CenterBox>
          <LeftBox>
            <MyInfo>
              <MyInfo_basic>
                <MyMainInfo>
                  <MyName>이일영</MyName>
                  <MyClass>
                    <MyClub>
                      동아리<MyCClub>대동여지도</MyCClub>
                    </MyClub>
                    <MyClub>
                      학번<MyCClub>2100</MyCClub>
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
                  {image ? (
                    <Profile src={image} />
                  ) : (
                    <Profile src={ProfileNone} />
                  )}
                </ProfileEdit>
              </MyInfo_basic>
              <B></B>
              <MyInfo_Menu>
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
                <Announce>
                  <Ball3 isAnnounce={page == "Announce" ? true : false}></Ball3>
                  <Text3
                    isAnnounce={page == "Announce" ? true : false}
                    id="Announce"
                    onClick={handlePage}
                  >
                    공지사항
                  </Text3>
                </Announce>
              </MyInfo_Menu>
              <B></B>
              <Logout>
                <LogoutB>로그아웃</LogoutB>
              </Logout>
            </MyInfo>
          </LeftBox>
          <RightBox>
            {page == "ApplyDetail" ? (
              <>
                <MyName>지원내역</MyName>
                {getApply == false ? (
                  <NoApply>
                    <NoAppl>지원내역이 없습니다.</NoAppl>
                    <Opply>
                      자신이 지원한 전공동아리의 지원 내역은 이곳에서 확인
                      가능해요.
                    </Opply>
                  </NoApply>
                ) : (
                  <Applys>
                    <Apply>
                      <ApplyDetails>
                        <ApplyName>대동여지도</ApplyName>
                        <ApplyData>
                          <ApplyMajor>프론트엔드</ApplyMajor>
                          <ApplyD>
                            <ApplyLD>지원 마감일 : 2024-02-10</ApplyLD>
                            <ApplyIvD>
                              면접 일시 : 2024-02-10 12:30 ~ 12:50
                            </ApplyIvD>
                          </ApplyD>
                        </ApplyData>
                      </ApplyDetails>
                      <ApplyStatus>
                        서류 : 합격
                        <br />
                        면접 : 불합격
                      </ApplyStatus>
                    </Apply>
                    <Apply>
                      <ApplyDetails>
                        <ApplyName>노네임드</ApplyName>
                        <ApplyData>
                          <ApplyMajor>백엔드</ApplyMajor>
                          <ApplyD>
                            <ApplyLD>지원 마감일 : 2024-02-10</ApplyLD>
                            <ApplyIvD>
                              면접 일시 : 2024-02-10 12:30 ~ 12:50
                            </ApplyIvD>
                          </ApplyD>
                        </ApplyData>
                      </ApplyDetails>
                      <ApplyStatus>
                        서류 : 합격
                        <br />
                        면접 : 합격
                      </ApplyStatus>
                    </Apply>
                    <Apply>
                      <ApplyDetails>
                        <ApplyName>인포</ApplyName>
                        <ApplyData>
                          <ApplyMajor>시스템해킹</ApplyMajor>
                          <ApplyD>
                            <ApplyLD>지원 마감일 : 2024-02-10</ApplyLD>
                            <ApplyIvD>
                              면접 일시 : 2024-02-10 12:30 ~ 12:50
                            </ApplyIvD>
                          </ApplyD>
                        </ApplyData>
                      </ApplyDetails>
                      <ApplyStatus>
                        서류 : 합격
                        <br />
                        면접 : 합격
                      </ApplyStatus>
                    </Apply>
                  </Applys>
                )}
              </>
            ) : (
              false
            )}
            {page == "Alarm" ? (
              <>
                <MyName>알림</MyName>
                {getAlarm == false ? (
                  <NoAlarm>
                    <NoAppl>알림이 없습니다.</NoAppl>
                    <Opply>알림이 생기면 이곳에서 확인 가능해요.</Opply>
                  </NoAlarm>
                ) : (
                  <AlarmCenter>
                    <AlarmPass>
                      <AlarmLT>1시간 전</AlarmLT>
                      <AlarmName>
                        <AlarmPC>노네임드</AlarmPC>
                        <AlarmPassed>서류합격</AlarmPassed>
                        <InterviewScheduleSelect
                          onClick={() => setIvsdSelect(!ivsdSelect)}
                        >
                          면접 시간 선택
                        </InterviewScheduleSelect>
                      </AlarmName>
                      <AlarmText>
                        이일영님, 노네임드 백엔드 분야 서류합격을 축하드려요!
                        면접 시간을 선택해주세요.
                      </AlarmText>
                    </AlarmPass>
                    <AlarmPass>
                      <AlarmLT>2시간 전</AlarmLT>
                      <AlarmName>
                        <AlarmPC>대동여지도</AlarmPC>
                        <AlarmPassed>최종합격</AlarmPassed>
                      </AlarmName>
                      <AlarmText>
                        이일영님, 대동여지도 프론트엔드 분야 최종합격을
                        축하드려요! 🎉
                      </AlarmText>
                    </AlarmPass>
                    <AlarmPass>
                      <AlarmLT>1일 전</AlarmLT>
                      <AlarmName>
                        <AlarmPC>대동여지도</AlarmPC>
                        <AlarmPassed>서류합격</AlarmPassed>
                        <InterviewScheduleSelect
                          onClick={() => setIvsdSelect(!ivsdSelect)}
                        >
                          면접 시간 선택
                        </InterviewScheduleSelect>
                      </AlarmName>
                      <AlarmText>
                        이일영님, 대동여지도 프론트엔드 분야 서류합격을
                        축하드려요! 면접 시간을 선택해주세요.
                      </AlarmText>
                    </AlarmPass>
                  </AlarmCenter>
                )}
              </>
            ) : (
              false
            )}
            {page == "Announce" ? (
              <>
                <MyName>공지사항</MyName>
                {getAnnounce == false ? (
                  <NoAnno>
                    <NoAppl>공지사항이 없습니다.</NoAppl>
                    <Opply>공지사항이 생기면 이곳에서 확인 가능해요.</Opply>
                  </NoAnno>
                ) : (
                  <AnnounceCenter>
                    <AnnounceBox>
                      <AnnounceBox2>
                        <AnnounceOne>
                          <O></O>
                          <AlarmPC>2024 대동여지도 신입 부원 모집 공지</AlarmPC>
                        </AnnounceOne>
                        <Expand src={DownArrow} />
                      </AnnounceBox2>
                    </AnnounceBox>
                    <AnnounceBox>
                      <AnnounceBox2>
                        <AnnounceOne>
                          <O></O>
                          <AlarmPC>2024 대동여지도 디자이너 구인 공지</AlarmPC>
                        </AnnounceOne>
                        <Expand src={DownArrow} />
                      </AnnounceBox2>
                    </AnnounceBox>
                    <AnnounceBox>
                      <AnnounceBox2>
                        <AnnounceOne>
                          <O></O>
                          <AlarmPC>2023학년도 집가고싶다 공지</AlarmPC>
                        </AnnounceOne>
                        <Expand src={DownArrow} />
                      </AnnounceBox2>
                    </AnnounceBox>
                    <AnnounceBox opened={true}>
                      <AnnounceBox2>
                        <AnnounceOne>
                          <O></O>
                          <AlarmPC>역대급 대충 만든 공지</AlarmPC>
                        </AnnounceOne>
                        <Expand src={DownArrow} opened={true} />
                      </AnnounceBox2>
                      <AnnounceContent>
                        상처를 치료해줄 사람 어디 없나 가만히 놔뒀다가 끊임없이
                        덧나
                        <br />
                        사랑도 사람도 너무나도 겁나 혼자인게 무서워 난 잊혀질까
                        두려워
                        <br />
                        언제나 외톨이 맘의 문을 닫고 슬픔을 등에 지고 살아가는
                        바보 두 눈을 감고 두 귀를 막고 캄캄한 어둠 속에 내
                        자신을 가둬
                        <br />
                        아무도 모르게 다가온 이별에 대면했을때 또다시 혼자가
                        되는게 두려워 외면했었네 꿈에도 그리던 지나간 시간이
                        다시금 내게로 되돌아오기를 바라며 간절한 맘으로 밤마다
                        기도했었네
                        <br />
                        시위를 당기고 내 손을 떠나간 추억의 화살이 머나먼 과녁을
                        향해서 한없이 빠르게 날아가 내게로 돌아와 달라고 내 손을
                        붙잡아 달라고 부르고 불러도 한없이 소리쳐 대봐도 아무런
                        대답이 없는 널
                        <br />내 기억 속에서 너라는 사람의 존재를 완전히 지우려
                        끝없이 몸부림쳐 봐도 매일밤 꿈에서 그대가 나타나 흐르는
                        눈물을 닦아주는걸 나 어떡하라고 다 끄떡없다고 거짓말
                        하라고 더는 못 참겠다고 나도 아플 땐 아프다고 슬플땐
                        슬프다고 얼어 붙은 심장이 자꾸만 내게로 고자질해 정말로
                        끝이라고 정말로 괜찮다고 꾹 참고 참았던 눈물이 자꾸만
                        내게로 쏟아지네
                      </AnnounceContent>
                    </AnnounceBox>
                  </AnnounceCenter>
                )}
              </>
            ) : (
              false
            )}
          </RightBox>
        </CenterBox>
      </Container>
      {ivsdSelect ? (
        <Container2>
          <INT handleIvsdSelectToggle={handleIvsdSelectToggle} />
        </Container2>
      ) : null}
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

const spin = keyframes`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(-360deg);
  }
`;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  padding: 200px;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 110;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
`;

const CenterBox = styled.div`
  width: 100%;
  display: flex;
`;

const LeftBox = styled.div`
  display: flex;
  padding-top: 62px;
  padding-right: 77px;
  justify-content: flex-end;
  width: 30%;
  height: 1020px;
  border: 1px solid #eaecef;
  position: fixed;
  left: 0.33%;
`;

const RightBox = styled.div`
  position: relative;
  width: 70%;
  height: 1020px;
  border: 1px solid #eaecef;
  padding-left: 79px;
  padding-top: 70px;
  user-select: none;
  left: 30%;
`;

const NoApply = styled.div`
  display: flex;
  position: absolute;
  top: 179px;
  left: 470px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
`;

const NoAlarm = styled.div`
  display: flex;
  position: absolute;
  top: 179px;
  left: 550px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
`;

const NoAnno = styled.div`
  display: flex;
  position: absolute;
  top: 179px;
  left: 536px;
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
`;

const ApplyData = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplyMajor = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
`;

const ApplyD = styled.div`
  display: flex;
  gap: 13.7px;
`;

const ApplyLD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 150px;
`;

const ApplyIvD = styled.p`
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  width: 227px;
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
`;

const AlarmCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 28px;
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
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: 1.01;
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
  transition: box-shadow 0.1s, scale 0.1s;
  &:hover {
    box-shadow: 0 0 0 0.5px #000;
    scale: 1.1;
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
  width: 1000px;
  gap: 10px;
  margin-top: 86px;
  animation: ${fadeIn} 1s;
`;

const AnnounceBox = styled.div<{
  opened?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: ${({ opened }) => (opened ? "auto" : "45px")};
  border-bottom: 1px solid #eaecef;
  border-radius: 5px 5px 0 0;
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    scale: ${({ opened }) => (opened ? "1" : "1.01")};
    box-shadow: 0 0.5px 0 1px #d4d6de;
  }
`;

const AnnounceBox2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
`;

const Expand = styled.img<{
  opened?: boolean;
}>`
  width: 32px;
  height: 23px;
  cursor: pointer;
  rotate: ${({ opened }) => (opened ? "180deg" : "0deg")};
  &:hover {
    animation: ${spin} 0.5s;
  }
`;

const O = styled.div`
  background-color: #000;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const AnnounceOne = styled.div`
  display: flex;
  gap: 20px;
  height: 25px;
  align-items: center;
`;

const AnnounceContent = styled.p`
  display: flex;
  padding-left: 20px;
  color: #4e5558;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

const MyInfo = styled.div`
  display: flex;
  width: 299px;
  height: 328px;
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

const MyMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  gap: 8px;
`;

const MyName = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-size: 30px;
  font-weight: 700;
  color: #000;
  line-height: 30px;
  margin-bottom: 11px;
  padding: 0;
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
  transition: text-shadow 0.1s, font-weight 0.1s ease;
  &:hover {
    text-shadow: 1px 1px #222;
    font-size: 19px;
  }
  &:active {
    text-shadow: 1px 1px #222;
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
  transition: text-shadow 0.1s, font-weight 0.1s ease;
  &:hover {
    text-shadow: 1px 1px #222;
    font-size: 19px;
  }
  &:active {
    text-shadow: 1px 1px #222;
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
  transition: text-shadow 0.1s, font-weight 0.1s ease;
  &:hover {
    text-shadow: 1px 1px #222;
    font-size: 19px;
  }
  &:active {
    text-shadow: 1px 1px #222;
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
  transition: box-shadow 0.2s ease, scale 0.1s;
  &:hover {
    box-shadow: 0 0 0 2px #a3a5aa;
    scale: 1.1;
  }
  &:active {
    box-shadow: 0 0 0 0;
    scale: 0.75;
    background-color: #f00;
  }
`;

export default MyPage;
