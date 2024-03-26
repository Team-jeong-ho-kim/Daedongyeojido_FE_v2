import { instance } from "./axios";
import { ClubInfoModType } from "../types/type";

export const getAllClub = async () => {
  return await instance.get("/main");
};

export const getDetailClub = async (clubName: string) => {
  return await instance.get(`/club/info/${clubName}`);
};

export const patchClub = async (data: ClubInfoModType) => {
  return await instance.patch("/club/modify", data);
};
