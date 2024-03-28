import { instance } from "./axios";
import { InterviewTimePostType } from "../types/type";
import { InterviewTimePatchType } from "../types/type";

export const getITVquery = async (reportID: number) => {
  return await instance.get(`/interview/query-time/${reportID}`);
};

export const postITVtime = async (time: InterviewTimePostType) => {
  return await instance.post("/interview/choose-time", time);
};

export const patchITVmodify = async (
  clubName: string,
  times: InterviewTimePatchType[]
) => {
  return await instance.patch(`/interview/Modify-time/${clubName}`, times);
};
