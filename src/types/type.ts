type PassingResultType = "PASS" | "FAIL" | "WAIT";
type AlarmKindType = "REPORT_PASS_RESULT" | "INTERVIEW_PASS_RESULT";
type MajorType =
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
type PartType =
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

// announcement
export type AnnouncementType = {
  title: string;
  content: string;
};
