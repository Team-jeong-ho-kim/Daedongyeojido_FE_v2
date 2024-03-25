import { instance } from "./axios";
import { WriteType } from "../types/type";

export const getApplicant = async (clubName: string) => {
  return await instance.get(`/report/applicant/${clubName}`);
};

export const getApplicaion = async (reportId: number) => {
  return await instance.get(`/report/report-info/${reportId}`);
};

export const WriteAPI = async (data: WriteType) => {
  return await instance.post("/report/apply", data);
};

