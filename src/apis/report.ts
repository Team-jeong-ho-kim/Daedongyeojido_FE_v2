import { instance } from "./axios";

export const getApplicant = async (clubName: string) => {
  return await instance.get(`/report/applicant/${clubName}`);
};
