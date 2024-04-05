import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import Check from "../../assets/img/SVG/Check.svg";
import IVProcess from "../../assets/img/PNG/IVProcess.png";
import RecruitmentDate from "../../components/NoticePage/RecruitmentDate";
import InterviewDate from "../../components/NoticePage/InterviewDate";
import { useNavigate, useParams } from "react-router-dom";
import { NoticeDetailType, NoticeFieldType } from "../../types/type";
import { useState, useEffect } from "react";
import { MajorType } from "../../types/type";
import React from "react";
import { createNotice, getDetailNotice, modifyNotice } from "../../apis/notice";

interface Day {
  date: number;
  month: number;
  year: number;
}

const NoticeModifying: React.FC = () => {
  const { clubName, id } = useParams();
  const link = useNavigate();
  const [tip, setTip] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [recru, setRecru] = useState<boolean>(false);
  const [isRecru, setIsRecru] = useState<boolean>(false);
  const [RecruStart, setRecruStart] = useState<string | null>(null);
  const [RecruEnd, setRecruEnd] = useState<string | null>(null);
  const [interv, setInterv] = useState<boolean>(false);
  const [isInterv, setIsInterv] = useState<boolean>(false);
  const [IntervStart, setIntervStart] = useState<string | null>(null);
  const [IntervEnd, setIntervEnd] = useState<string | null>(null);
  const [fields, setFields] = useState<NoticeFieldType[]>([]);
  const [data, setData] = useState<NoticeDetailType>({
    clubName: clubName ?? "",
    noticeTitle: "",
    noticeExplain: "",
    clubExplain: "",
    fields: [],
    recruitDay: {
      startDay: "",
      endDay: "",
    },
    applyMethod: "",
    interviewDay: {
      startDay: "",
      endDay: "",
    },
    inquiry: "",
    weWant: "",
    assignment: "",
  });

  useEffect(() => {
    if (id) {
      getDetailNotice(parseInt(id)).then((res) => {
        const newArr: NoticeFieldType[] = [];
        res.data.fields.map((field: any) => {
          newArr.push({
            major: field.major,
            toDo: field.toDo,
          });
        });
        setFields(newArr);
        setData(res.data);
      });
    }
  }, []);

  useEffect(() => {
    if (RecruStart && RecruEnd && IntervStart && IntervEnd) {
      setData({
        ...data,
        recruitDay: {
          startDay: RecruStart,
          endDay: RecruEnd,
        },
        interviewDay: {
          startDay: IntervStart,
          endDay: IntervEnd,
        },
      });
    }
  }, [RecruStart, RecruEnd, IntervStart, IntervEnd]);

  useEffect(() => {
    setData({ ...data, fields: fields });
  }, [fields]);

  const [RSM, setRSM] = useState<Day>({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [REM, setREM] = useState<Day>({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [ISM, setISM] = useState<Day>({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [IEM, setIEM] = useState<Day>({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleRecruView = () => {
    if (RecruStart && RecruEnd) {
      const [year1, month1, date1] = RecruStart.split("-");
      const [year2, month2, date2] = RecruEnd.split("-");
      setRSM({
        date: parseInt(date1),
        month: parseInt(month1) - 1,
        year: parseInt(year1),
      });
      setREM({
        date: parseInt(date2),
        month: parseInt(month2) - 1,
        year: parseInt(year2),
      });
    }
    handleRecru();
  };

  const handleRecru = () => {
    setRecru(!recru);
    setIsRecru(true);
  };

  const handleIntervView = () => {
    if (IntervStart && IntervEnd) {
      const [year1, month1, date1] = IntervStart.split("-");
      const [year2, month2, date2] = IntervEnd.split("-");
      setISM({
        date: parseInt(date1),
        month: parseInt(month1) - 1,
        year: parseInt(year1),
      });
      setIEM({
        date: parseInt(date2),
        month: parseInt(month2) - 1,
        year: parseInt(year2),
      });
    }
    handleInterv();
  };

  const handleInterv = () => {
    setInterv(!interv);
    setIsInterv(true);
  };

  const handleTip = () => {
    setTip(!tip);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onChangeField = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: "major" | "todo"
  ) => {
    const newArr = [...fields];
    if (type === "major") {
      newArr[index].major = e.target.value as MajorType;
    } else {
      newArr[index].toDo = e.target.value;
    }
    setFields(newArr);
  };

  const onPlusField = () => {
    const newArr: NoticeFieldType[] = [...fields, { major: "", toDo: "" }];

    setFields(newArr);
  };

  const onDeleteField = (index: number) => {
    const newArr = fields.filter((_, num) => num !== index);
    setFields(newArr);
  };

  const onSubmit = () => {
    if (id) {
      const postData = {
        ...data,
        noticeId: parseInt(id),
        recruitDay: {
          startDay: data.recruitDay.startDay + "T10:00:00",
          endDay: data.recruitDay.endDay + "T10:00:00",
        },
        interviewDay: {
          startDay: data.interviewDay.startDay + "T10:00:00",
          endDay: data.interviewDay.endDay + "T10:00:00",
        },
      };
      modifyNotice(postData)
        .then((res) => {
          alert("성공적으로 수정되었습니다");
          console.log(res);

          link(`/NoticeDetails/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const postData = {
        ...data,
        recruitDay: {
          startDay: data.recruitDay.startDay + "T10:00:00",
          endDay: data.recruitDay.endDay + "T10:00:00",
        },
        interviewDay: {
          startDay: data.interviewDay.startDay + "T10:00:00",
          endDay: data.interviewDay.endDay + "T10:00:00",
        },
      };
      createNotice(postData).then(() => {
        alert("성공적으로 추가되었습니다");
        link("/");
      });
    }
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Body>
        <NoticeTop>
          <NoticeTitleBox>
            <NoticeTitleInput
              type="text"
              name="noticeTitle"
              value={data.noticeTitle}
              maxLength={30}
              onChange={onChange}
              placeholder="공고 제목"
            />
            <SaveButton
              usable={"clubLeader"}
              onClick={() => {
                onSubmit();
              }}
            >
              저장하기
            </SaveButton>
          </NoticeTitleBox>
          <NoticeSubtitleInput
            type="text"
            name="noticeExplain"
            value={data.noticeExplain}
            maxLength={45}
            onChange={onChange}
            placeholder="공고 부제목"
          />
        </NoticeTop>
        <ClubExplainBox>
          <ClubExplain>
            <ClubExplainInput
              name="clubExplain"
              value={data.clubExplain}
              maxLength={300}
              cols={100}
              rows={3}
              onChange={onChange}
              placeholder="동아리 소개"
            />
          </ClubExplain>
          <I>
            <II onClick={handleTip}>TIP : </II>
            {tip ? (
              <J onClick={handleTip}>
                <III>
                  @@대동여지도@@
                  <br />
                  ##대동여지도##
                  <br />
                  $$대동여지도$$
                  <br />
                  %%대동여지도%%
                </III>
                <III>
                  →<br />→<br />→<br />→
                </III>
                <III>
                  <Ired>대동여지도</Ired>
                  <br />
                  <Iyellow>대동여지도</Iyellow>
                  <br />
                  <Igreen>대동여지도</Igreen>
                  <br />
                  <Iblue>대동여지도</Iblue>
                </III>
              </J>
            ) : (
              <JJ onClick={handleTip}>특수 기호로 단어를 강조할 수 있어요!</JJ>
            )}
          </I>
        </ClubExplainBox>
        <Inbox>
          <RecruitmentBox>
            <Alltitle>모집 분야</Alltitle>
            <Recruits>
              {fields &&
                fields.map((_field, index) => (
                  <div key={index}>
                    <LeftInput
                      type="text"
                      value={fields[index].major}
                      onChange={(e) => onChangeField(e, index, "major")}
                      maxLength={10}
                      placeholder="모집 전공"
                    />
                    <RightInput
                      type="text"
                      value={fields[index].toDo}
                      onChange={(e) => onChangeField(e, index, "todo")}
                      maxLength={50}
                      placeholder="모집 이유"
                    />
                    <Delete
                      onClick={() => {
                        onDeleteField(index);
                      }}
                    >
                      삭제
                    </Delete>
                  </div>
                ))}
            </Recruits>
            <span
              style={{ cursor: "pointer", color: "gray" }}
              onClick={onPlusField}
            >
              {" "}
              추가
            </span>
          </RecruitmentBox>
          <InterviewProcess>
            <Alltitle>면접 절차</Alltitle>
            <IVPBox>
              <IVPImg src={IVProcess} />
            </IVPBox>
          </InterviewProcess>
          <ApplyManual>
            <Alltitle>모집기간 및 지원방법</Alltitle>
            <ApplyManualContent>
              <ApplyManuals>
                <Content>
                  <Checkbox src={Check} />
                  <Contents>모집기간 :</Contents>
                </Content>
                <RecruitmentDays onClick={handleRecruView}>
                  {isRecru ? `${RecruStart} ~ ${RecruEnd}` : "모집기간 설정"}
                </RecruitmentDays>
              </ApplyManuals>
              <ApplyManuals>
                <Content>
                  <Checkbox src={Check} />
                  <Contents>지원방법 :</Contents>
                </Content>
                <ApplyManualsInput
                  type="text"
                  name="applyMethod"
                  value={data.applyMethod}
                  maxLength={50}
                  onChange={onChange}
                  placeholder="지원방법 작성"
                />
              </ApplyManuals>
              <ApplyManuals>
                <Content>
                  <Checkbox src={Check} />
                  <Contents>면접기간 :</Contents>
                </Content>
                <RecruitmentDays onClick={handleIntervView}>
                  {isInterv ? `${IntervStart} ~ ${IntervEnd}` : "면접기간 설정"}
                </RecruitmentDays>
              </ApplyManuals>
            </ApplyManualContent>
          </ApplyManual>
          <WeWantAndAssignment>
            <Alltitle>{clubName}'s 인재상</Alltitle>
            <WWAATextarea
              name="weWant"
              value={data.weWant}
              placeholder="인재상 작성"
              maxLength={300}
              onChange={onChange}
            />
          </WeWantAndAssignment>
          <WeWantAndAssignment>
            <Alltitle>{clubName}'s 과제</Alltitle>
            <WWAATextarea
              name="assignment"
              value={data.assignment}
              placeholder="과제 작성"
              maxLength={300}
              onChange={onChange}
            />
          </WeWantAndAssignment>
          <Report>
            <Alltitle>문의사항</Alltitle>
            <WWAATextarea
              name="inquiry"
              value={data.inquiry}
              placeholder="문의사항 작성"
              maxLength={300}
              onChange={onChange}
            />
          </Report>
        </Inbox>
      </Body>
      {recru && (
        <>
          <BlurBack></BlurBack>
          <RecruitmentDate
            RSM={RSM}
            REM={REM}
            setRSM={setRSM}
            setREM={setREM}
            RecruStart={RecruStart}
            RecruEnd={RecruEnd}
            setRecruStart={setRecruStart}
            setRecruEnd={setRecruEnd}
            toggle={handleRecru}
          />
        </>
      )}
      {interv && (
        <>
          <BlurBack></BlurBack>
          <InterviewDate
            ISM={ISM}
            IEM={IEM}
            setISM={setISM}
            setIEM={setIEM}
            IntervStart={IntervStart}
            IntervEnd={IntervEnd}
            setIntervStart={setIntervStart}
            setIntervEnd={setIntervEnd}
            toggle={handleInterv}
          />
        </>
      )}
      <Footer />
    </Container>
  );
};

const Delete = styled.div`
  width: 48px;
  height: 48px;
  color: white;
  background-color: red;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const fade = keyframes`
  0% {
	transform: translateX(50px);
	opacity: 0;
  }
  100% {
	transform: translateX(0);
	opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vw;
`;

const BlurBack = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 1111;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
`;

const NoticeTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 300px;
  height: 248px;
  justify-content: center;
  gap: 8px;
`;

const NoticeTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 70px;
  width: 100%;
`;

const NoticeTitleInput = styled.input`
  width: 875px;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
  padding: 16px 21px;
  border-radius: 10px;
  background-color: #f4f4f4;
  transition: border 0.05s ease;
  cursor: text;
  &:hover {
    padding: 20px 18px;
    border: 3px solid #cdcdcd;
  }
  &:focus {
    padding: 20px 18px;
    border: 3px solid #cdcdcd;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const NoticeSubtitleInput = styled.input`
  width: 875px;
  height: 42px;
  color: #86888c;
  font-size: 16px;
  font-weight: 500;
  padding: 17px 21px;
  border-radius: 10px;
  background-color: #f5f5f5;
  transition: border 0.05s ease;
  cursor: text;
  &:hover {
    padding: 18px;
    border: 3px solid #cdcdcd;
  }
  &:focus {
    padding: 18px;
    border: 3px solid #cdcdcd;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    color: #4e5968;
  }
`;

const SaveButton = styled.button<{
  usable: string;
}>`
  display: ${({ usable }) => (usable == "clubLeader" ? "block" : "none")};
  width: 134px;
  height: 49px;
  border-radius: 4px;
  background-color: #52565d;
  color: #fff;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  transition: scale 0.15s, box-shadow 0.2s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const ClubExplainBox = styled.div`
  height: 488px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fbf9fa;
  gap: 30px;
`;

const I = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100px;
  user-select: none;
`;

const J = styled.div`
  display: flex;
  animation: ${fade} 0.5s ease-out;
  gap: 15.7px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.5);
  }
`;

const JJ = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-size: 15px;
  color: #212121;
  font-weight: 500;
  animation: ${fade} 0.5s ease-out;
  cursor: pointer;
  &:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

const II = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  color: #2a2a2a;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

const III = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  color: #000;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
`;

const Ired = styled.span`
  color: #ff6065;
  font-weight: 700;
`;

const Iyellow = styled.span`
  color: #ffc705;
  font-weight: 700;
`;

const Igreen = styled.span`
  color: #08dd85;
  font-weight: 700;
`;

const Iblue = styled.span`
  color: #3006e5;
  font-weight: 700;
`;

const ClubExplain = styled.div`
  margin-top: 60px;
  height: 222px;
  padding: 0 47px;
  display: flex;
  align-items: center;
  width: 1194px;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;
  transition: border 0.1s;
  &:hover {
    padding: 0 47px;
    border: 3px solid #cdcdcd;
  }
  &:focus {
    border: 3px solid #cdcdcd;
  }
`;

const ClubExplainInput = styled.textarea`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  background-color: #f5f5f5;
  overflow: hidden;
  resize: none;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const Inbox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 61px 300px 128px;
  justify-content: center;
  gap: 88px;
`;

const Alltitle = styled.p`
  height: 33px;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

const RecruitmentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  span {
    align-self: center;
  }
`;

const Recruits = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    display: flex;
    gap: 20px;
  }
`;

const LeftInput = styled.input`
  width: 271px;
  height: 40px;
  border-radius: 10px;
  background-color: #f8f8f8;
  text-align: center;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const RightInput = styled.input`
  width: 1135px;
  height: 40px;
  border-radius: 10px;
  background-color: #f8f8f8;
  text-align: center;
  color: #585858;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const InterviewProcess = styled.div`
  display: flex;
  width: 100%;
  gap: 96px;
  flex-direction: column;
  margin-bottom: 98px;
`;

const IVPBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
`;

const IVPImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ApplyManual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 34px;
`;

const ApplyManualContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ApplyManuals = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const ApplyManualsInput = styled.input`
  width: 1345px;
  height: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 0 19px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  transition: border 0.05s ease;
  cursor: text;
  &:hover {
    padding: 0 18px;
    border: 1px solid #cdcdcd;
  }
  &:focus {
    padding: 0 18px;
    border: 1px solid #cdcdcd;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const RecruitmentDays = styled.p`
  display: flex;
  align-items: center;
  width: 1345px;
  height: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 0 19px;
  color: #616060;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  transition: border 0.05s ease;
  cursor: pointer;
  &:hover {
    padding: 0 18px;
    border: 1px solid #cdcdcd;
  }
`;

const Content = styled.div`
  width: 9%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Contents = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  height: 25px;
`;

const Checkbox = styled.img`
  width: 18px;
  height: 18px;
  margin-bottom: 3px;
`;

const WeWantAndAssignment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

const Report = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

const WWAATextarea = styled.textarea`
  width: 100%;
  height: 153px;
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  border-radius: 10px;
  padding: 15px 24px;
  background-color: #f8f8f8;
  overflow: hidden;
  resize: none;
  transition: border 0.05s ease;
  cursor: text;
  &:hover {
    padding: 12px 21px;
    border: 3px solid #cdcdcd;
  }
  &:focus {
    padding: 12px 21px;
    border: 3px solid #cdcdcd;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export default NoticeModifying;
