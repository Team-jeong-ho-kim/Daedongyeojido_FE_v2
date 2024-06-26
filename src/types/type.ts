export type PassingResultType = "PASS" | "FAIL" | "WAIT";
export type AlarmKindType = "REPORT_PASS_RESULT" | "INTERVIEW_PASS_RESULT";
export type MajorType =
  | ""
  | "UNDEFINED"
  | "FRONT"
  | "BACK"
  | "IOS"
  | "AND"
  | "FLUTTER"
  | "EMBEDDED"
  | "AI"
  | "SECURITY"
  | "DEVOPS"
  | "DESIGN"
  | "GAME";
export type PartType =
  | "INDEPENDENT"
  | "CLUB_MEMBER"
  | "CLUB_LEADER"
  | "TEACHER"
  | "CLUB_LEADER_TEACHER"
  | "ADMIN";

// auth
export interface LoginType {
  account_id: string;
  password: string;
}

// user
export type MyReportType = {
  id: number;
  clubName: string;
  hopeMajor: MajorType;
  deadline: string;
  reportPassingResult: PassingResultType;
  interviewPassingResult: PassingResultType;
  interviewStartTime: string;
  interviewEndTime: string;
};

export type MyInfoType = {
  classNumber: string;
  name: string;
  part: PartType;
  myClub: string;
  profileImageUrl: string | null;
  major: MajorType | null;
  myReport: MyReportType[];
};

// interview
export type InterviewTimeType = {
  interviewTimeId: number;
  interviewStartTime: string;
  interviewEndTime: string;
};

export type InterviewTimePostType = {
  reportId: number;
  interviewTimeId: number;
};

export type InterviewTimePatchType = Omit<InterviewTimeType, "interviewTimeId">;

export type InterviewScheduleType = {
  id: number;
  clubName: string;
};

export type InterviewTimeDeleteType = {
  clubName: string;
  interviewTimeId: number;
};

//alarm
export type AlarmPostType = {
  reportId: number;
  passingResult: PassingResultType;
  alarmType: AlarmKindType;
};

export type MyAlarmType = {
  alarmId: number;
  reportId: number;
  title: string;
  contents: string;
  clubName: string;
  userName: string;
  createTime: string;
  passingResult: PassingResultType;
  major: MajorType;
  alarmType: AlarmKindType;
};

// announcement
export type AnnouncementType = {
  title: string;
  contents: string;
};

// club
export type ClubType = {
  clubName: string;
  title: string;
  clubImageUrl: string;
  tags: string[];
};

export type ClubBannerType = {
  id: string;
  bannerImgUrl: string;
  bannerTitle: string;
};

export type ClubDetailType = {
  clubName: string;
  title: string | null;
  introduction: string | null;
  clubImageUrl: string | null;
  clubBannerUrl: string | null;
  tags: string[];
  teacherName: string;
  clubMembers: {
    name: string;
    major: MajorType;
    oneLiner: string;
    profileImageUrl: string | null;
  }[];
  questResponses: {
    questionId: number;
    question: string;
    answer: string;
  }[];
};

export type ClubsProps = {
  clubs: ClubType[];
};

export type ClubsBannerProps = {
  banners: ClubBannerType[];
};

export type clubMemberType = {
  name: string;
};

export type questResponsesType = {
  questionId: number;
  question: string;
  answer: string;
};

export type ClubDetailsType = {
  clubName: string;
  title: string;
  introduction: string;
  clubImageUrl: string;
  clubBannerUrl: string;
  tags: string[];
  clubMember: clubMemberType[];
  questResponses: questResponsesType[];
};

export type ClubInfoModType = {
  clubName: string;
  title: string;
  introduction: string;
  clubImageUrl: string;
  clubBannerUrl: string;
  tags: string[];
};

//report
export type ApplicantType = {
  reportId: number;
  classNumber: string;
  name: string;
  hopeMajor: MajorType;
  interviewStartTime: string;
  interviewEndTime: string;
  reportPassingResult: PassingResultType;
  interviewPassingResult: PassingResultType;
};

export type QueryProps = {
  querys: ApplicantType[];
};

export type noticeQueststype = {
  question: string;
  answer: string;
};

export type ApplicationType = {
  classNumber: string;
  name: string;
  introduce: string;
  reportPassingResult: PassingResultType;
  noticeQuests: noticeQueststype[];
};

export type InfoProps = {
  info: ApplicationType;
};

export type reportQests = {
  noticeQuestId: number;
  answer: string;
};

export interface WriteType {
  noticeId: number;
  introduce: string;
  major: MajorType;
  reportQuests: reportQests[];
}

export type AnswerProps = {
  answers: reportQests[];
};

export type MemoType = {
  classNumber: string;
  name: string;
  major: MajorType;
  interviewPassingResult: PassingResultType;
  memo: string;
};

export type MemoProps = {
  memos: MemoType[];
};

export type MemoEditType = {
  reportId: number;
  memo: string;
};

//inquiry
type InquiryType = "SERVER" | "CLIENT";

export type InquiryPostType = {
  name: string;
  phoneNumber: string;
  inquiryType: InquiryType;
  inquiryContent: string;
};

// notice
type RecruitDay = {
  startDay: string;
  endDay: string;
};

export type NoticeGetArrayType = {
  id: number;
  clubName: string;
  noticeTitle: string;
  major: MajorType[];
  recruitDay: RecruitDay;
  isApply: boolean;
};

export type NoticePropsType = {
  isCreateNotice: boolean;
  notices: NoticeGetArrayType[];
};

export type QuestionsType = {
  noticeId: number;
  question: string;
};

export type ApplicationNoticeType = {
  name: string;
  classNumber: string;
  questions: CustomQuests[];
};

export type writeProps = {
  write: ApplicationNoticeType;
};

export type CustomQuests = {
  id: number;
  question: string;
};

//admin-club
export type adminPageType = {
  clubName: string;
  teacherName: string;
  memberResponses: memberType[];
};

export type memberType = {
  userName: string;
  classNumber: string;
  part: PartType;
  major: MajorType;
};

export type memberProps = {
  clubs: adminPageType[];
};

export type NoticeFieldType = {
  major: MajorType;
  toDo: string;
};

export type NoticeDetailType = {
  noticeId?: number;
  clubName: string;
  noticeTitle: string;
  noticeExplain: string;
  clubExplain: string;
  fields: NoticeFieldType[];
  recruitDay: {
    startDay: string;
    endDay: string;
  };
  applyMethod: string;
  interviewDay: {
    startDay: string;
    endDay: string;
  };
  inquiry: string;
  weWant: string;
  assignment: string;
};

// memo
export type MemoGetType = {
  classNumber: string;
  name: string;
  major: MajorType;
  interviewPassingResult: PassingResultType;
  memo: string;
};

export type MemoPatchType = {
  reportId: number;
  memo: string;
};

// question
export type ClubQuestionsGetType = {
  questionId: number;
  question: string;
  answer: string | null;
};
