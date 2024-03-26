import { instance } from "./axios";
import { adminPageType } from "../types/type";

export const getAdmin = async () => {
  return await instance.get("/admin-club/page");
};

export const createClub = async (clubName: string) => {
  return await instance.post("/admin-club/create", { clubName: clubName });
};

export const patchClub = async (club: adminPageType) => {
  return await instance.patch("/admin-club/edit-member", {
    clubName: club.clubName,
    teacherName: club.teacherName,
    clubMembers: club.memberResponses,
  });
};

export const deleteNotice = async (clubName: string) => {
  return await instance.delete(`/admin-club/delete/${clubName}`);
};
