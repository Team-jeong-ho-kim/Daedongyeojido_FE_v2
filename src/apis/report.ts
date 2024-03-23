import { instance } from "./axios";

export const getApplicant = async (clubName: string) => {
  return await instance.get(`/report/applicant/${clubName}`);
};

export const getApplicaion = async (reportId: number) => {
  return await instance.get(`/report/report-info/${reportId}`);
};
