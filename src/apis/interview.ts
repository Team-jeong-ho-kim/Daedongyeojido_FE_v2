import { instance } from "./axios";
import { InterviewTimeDeleteType } from "../types/type";
import { InterviewTimePostType } from "../types/type";
import { InterviewTimePatchType } from "../types/type";

export const getITVquery = async (reportId: number) => {
  return await instance.get(`/interview/query-time/${reportId}`);
};

export const getClubITVquery = async (clubName: string) => {
  return await instance.get(`/interview/club-time/${clubName}`);
};

export const postITVtime = async (time: InterviewTimePostType) => {
  return await instance.post("/interview/choose-time", time);
};

export const patchITVmodify = async (
  clubName: string,
  times: InterviewTimePatchType[]
) => {
  return await instance.patch(`/interview/modify-time/${clubName}`, times);
};

export const deleteITVtime = async (data: InterviewTimeDeleteType) => {
  return await instance.delete(`/interview/delete-time`, {
    data: data,
  });
};
