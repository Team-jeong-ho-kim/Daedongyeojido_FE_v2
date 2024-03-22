import { instance } from "./axios";

export const getAllClub = async () => {
  return await instance.get("/main");
};

export const getDetailClub = async (clubName: string) => {
  return await instance.get(`/club/info/${clubName}`);
};

export const patchClub = async () => {
  return await instance.patch("/club/modify");
};
