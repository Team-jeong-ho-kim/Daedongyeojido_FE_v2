import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/MainPage/Footer";
import { Check } from "../../assets";
import { IVProcess } from "../../assets";
import RecruitmentDate from "../../components/NoticePage/RecruitmentDate";
import InterviewDate from "../../components/NoticePage/InterviewDate";

interface NoticeState {
  title: string;
  subtitle: string;
  major1: string;
  exp1: string;
  major2: string;
  exp2: string;
  major3: string;
  exp3: string;
  major4: string;
  exp4: string;
  idealTalent: string;
  assignment: string;
  report: string;
  applyMethod: string;
}

interface Day {
  date: number;
  month: number;
  year: number;
}

const init: NoticeState = {
  title: "",
  subtitle: "",
  major1: "",
  exp1: "",
  major2: "",
  exp2: "",
  major3: "",
  exp3: "",
  major4: "",
  exp4: "",
  idealTalent: "",
  assignment: "",
  report: "",
  applyMethod: "",
};

const NoticeModifying: React.FC = () => {
  const [state, setState] = useState<NoticeState>(init);
  const [tip, setTip] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState<Boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [explain, setExplain] = useState<string>("");
  const [line, setLine] = useState<number>(1);
  const [recru, setRecru] = useState<boolean>(false);
  const [isRecru, setIsRecru] = useState<boolean>(false);
  const [RecruStart, setRecruStart] = useState<string | null>(null);
  const [RecruEnd, setRecruEnd] = useState<string | null>(null);
  const [interv, setInterv] = useState<boolean>(false);
  const [isInterv, setIsInterv] = useState<boolean>(false);
  const [IntervStart, setIntervStart] = useState<string | null>(null);
  const [IntervEnd, setIntervEnd] = useState<string | null>(null);
  const [clubName, setClubName] = useState<String>("대동여지도");
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

  const handleModifyConfirm = () => {
    window.location.replace("/NoticeModify");
  };

  const handleExplainChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const lineCount = inputValue.split("\n").length;
    if (inputValue.length <= 100 && lineCount <= 3) {
      setLine(lineCount);
      setExplain(inputValue);
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
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

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Body>
        <NoticeTop>
          <NoticeTitleBox>
            <NoticeTitleInput
              type="text"
              name="title"
              value={state.title}
              maxLength={30}
              onChange={handleChange}
              placeholder="공고 제목"
            />
            <SaveButton usable={"clubLeader"} onClick={handleModifyConfirm}>
              저장하기
            </SaveButton>
          </NoticeTitleBox>
          <NoticeSubtitleInput
            type="text"
            name="subtitle"
            value={state.subtitle}
            maxLength={45}
            onChange={handleChange}
            placeholder="공고 부제목"
          />
        </NoticeTop>
        <ClubExplainBox>
          <ClubExplain isFocus={isFocus}>
            <ClubExplainInput
              value={explain}
              maxLength={100}
              cols={100}
              rows={line}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleExplainChange}
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
              <RowLine>
                <LeftInputBox>
                  <LeftInput
                    type="text"
                    name="major1"
                    value={state.major1}
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="모집 전공"
                  />
                </LeftInputBox>
                <RightInputBox>
                  <RightInput
                    type="text"
                    name="exp1"
                    value={state.exp1}
                    maxLength={50}
                    onChange={handleChange}
                    placeholder="모집 이유"
                  />
                </RightInputBox>
              </RowLine>
              <RowLine>
                <LeftInputBox>
                  <LeftInput
                    type="text"
                    name="major2"
                    value={state.major2}
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="모집 전공"
                  />
                </LeftInputBox>
                <RightInputBox>
                  <RightInput
                    type="text"
                    name="exp2"
                    value={state.exp2}
                    maxLength={50}
                    onChange={handleChange}
                    placeholder="모집 이유"
                  />
                </RightInputBox>
              </RowLine>
              <RowLine>
                <LeftInputBox>
                  <LeftInput
                    type="text"
                    name="major3"
                    value={state.major3}
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="모집 전공"
                  />
                </LeftInputBox>
                <RightInputBox>
                  <RightInput
                    type="text"
                    name="exp3"
                    value={state.exp3}
                    maxLength={50}
                    onChange={handleChange}
                    placeholder="모집 이유"
                  />
                </RightInputBox>
              </RowLine>
              <RowLine>
                <LeftInputBox>
                  <LeftInput
                    type="text"
                    name="major4"
                    value={state.major4}
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="모집 전공"
                  />
                </LeftInputBox>
                <RightInputBox>
                  <RightInput
                    type="text"
                    name="exp4"
                    value={state.exp4}
                    maxLength={50}
                    onChange={handleChange}
                    placeholder="모집 이유"
                  />
                </RightInputBox>
              </RowLine>
            </Recruits>
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
                  maxLength={50}
                  onChange={handleChange}
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
              name="idealTalent"
              value={state.idealTalent}
              placeholder="인재상 작성"
              maxLength={300}
              onChange={handleChange}
            />
          </WeWantAndAssignment>
          <WeWantAndAssignment>
            <Alltitle>{clubName}'s 과제</Alltitle>
            <WWAATextarea
              name="assignment"
              value={state.assignment}
              placeholder="과제 작성"
              maxLength={300}
              onChange={handleChange}
            />
          </WeWantAndAssignment>
          <Report>
            <Alltitle>문의사항</Alltitle>
            <WWAATextarea
              name="report"
              value={state.report}
              placeholder="문의사항 작성"
              maxLength={300}
              onChange={handleChange}
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
  padding: 0 200px;
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
  width: 1052px;
  height: 82px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  padding: 20px 21px;
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
  width: 1052px;
  height: 64px;
  color: #86888c;
  font-family: "Spoqa Han Sans Neo";
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  padding: 18px 21px;
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
  font-weight: 400;
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

const ClubExplain = styled.div<{
  isFocus: boolean;
}>`
  margin-top: 60px;
  height: 222px;
  padding: ${({ isFocus }) => (isFocus ? "0 47px" : "0 50px")};
  display: flex;
  align-items: center;
  width: 1194px;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: ${({ isFocus }) => (isFocus ? "3px solid #cdcdcd" : "none")};
  transition: border 0.1s;
  &:hover {
    padding: 0 47px;
    border: 3px solid #cdcdcd;
  }
`;

const ClubExplainInput = styled.textarea`
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  font-family: "Spoqa Han Sans Neo";
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
  padding: 61px 200px 128px;
  justify-content: center;
  gap: 88px;
`;

const Alltitle = styled.p`
  height: 33px;
  font-family: "Spoqa Han Sans Neo";
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
`;

const RecruitmentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Recruits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #ececec;
`;

const RowLine = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
  border-bottom: 1px solid #ececec;
`;

const LeftInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.4%;
  height: 100%;
  border-right: 2px solid #ececec;
`;

const RightInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79.6%;
  height: 100%;
`;

const LeftInput = styled.input`
  width: 277px;
  height: 48px;
  border-radius: 10px;
  background-color: #f5f5f5;
  text-align: center;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  cursor: text;
  &:focus::placeholder {
    color: transparent;
  }
`;

const RightInput = styled.input`
  width: 1185px;
  height: 48px;
  border-radius: 10px;
  background-color: #f5f5f5;
  text-align: center;
  color: #585858;
  font-family: "Spoqa Han Sans Neo";
  font-size: 22px;
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
  width: 1200px;
  height: 120px;
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
  display: flex;
  align-items: center;
  gap: 25px;
`;

const ApplyManualsInput = styled.input`
  width: 1385px;
  height: 37px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 0 19px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
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
  width: 1385px;
  height: 37px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 0 19px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
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
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Contents = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
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
  font-size: 22px;
  font-weight: 300;
  line-height: normal;
  font-family: "Spoqa Han Sans Neo";
  border-radius: 10px;
  padding: 15px 24px;
  background-color: #f5f5f5;
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
