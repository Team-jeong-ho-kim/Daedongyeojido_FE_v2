import { instance } from "./axios";

export const createNotice = async () => {
  return await instance.post("/notice/create");
};

export const getAllNotice = async () => {
  return await instance.get("/notice/all");
};

export const getDetailNotice = async (noticeId: string) => {
  return await instance.get(`/notice/info/${noticeId}`);
};

export const deleteNotice = async (noticeId: string) => {
  return await instance.delete(`/notice/delete/${noticeId}`);
};
