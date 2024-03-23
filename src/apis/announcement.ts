import { AnnouncementType } from "../types/type";
import { instance } from "./axios";

export const creatAnnouncement = async (data: AnnouncementType) => {
  return await instance.post("/announcement/create", data);
};

export const getAnnouncement = async () => {
  return await instance.get("/announcement/query");
};
