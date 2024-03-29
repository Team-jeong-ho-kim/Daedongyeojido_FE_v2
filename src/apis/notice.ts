import { NoticeDetailType } from "../types/type";
import { instance } from "./axios";

export const createNotice = async (data: NoticeDetailType) => {
  return await instance.post("/notice/create", data);
};

export const addQuestion = async (data: { id: number; question: string }) => {
  return await instance.post("/notice/add-quest", data);
};

export const getAllNotice = async () => {
  return await instance.get("/notice/all");
};

export const getDetailNotice = async (noticeId: number) => {
  return await instance.get(`/notice/info/${noticeId}`);
};

export const deleteNotice = async (noticeId: string) => {
  return await instance.delete(`/notice/delete/${noticeId}`);
};

export const getApplication = async (noticeId: number) => {
  return await instance.get(`/notice/apply/${noticeId}`);
};
