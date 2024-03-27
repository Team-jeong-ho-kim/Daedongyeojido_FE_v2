export type PassingResultType = "PASS" | "FAIL" | "WAIT";
export type AlarmKindType = "REPORT_PASS_RESULT" | "INTERVIEW_PASS_RESULT";
export type MajorType =
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
  | "CLUB_LEADER_TEACHER";

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

//alarm
export type AlarmPostType = {
  reportId: number;
  passingResult: PassingResultType;
  alarmType: AlarmKindType;
};

export type MyAlarmType = {
  alarmId: number;
  title: string;
  contents: string;
  clubName: string;
  userName: string;
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
  reportQuests: reportQests[];
}

export type AnswerProps = {
  answers: reportQests[];
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

export type NoticeGetType = {
  id: number;
  clubName: string;
  noticeTitle: string;
  recruitDay: RecruitDay;
  clubImageUrl: string;
};

export type NoticePropsType = {
  notices: NoticeGetType[];
};

export type QuestionsType = {
  id: number;
  question: string;
};

export type ApplicationNoticeType = {
  name: string;
  classNumber: string;
  questions: QuestionsType[];
};

export type writeProps = {
  write: ApplicationNoticeType;
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
};

export type memberProps = {
  clubs: adminPageType[];
};

export type NoticeFieldType = {
  major: MajorType;
  todo: string;
};

export type NoticeDetailType = {
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

// question
export type ClubQuestionsGetType = {
  questionId: number;
  question: string;
  answer: string | null;
};
