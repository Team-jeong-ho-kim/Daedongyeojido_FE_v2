import { instance } from "./axios";
import { WriteType, MemoEditType, MemoPatchType } from "../types/type";

export const getApplicant = async (clubName: string) => {
  return await instance.get(`/report/applicant/${clubName}`);
};

export const getApplication = async (reportId: number) => {
  return await instance.get(`/report/report-info/${reportId}`);
};

export const getMemoData = async (reportId: number) => {
  return await instance.get(`/report/query-memo/${reportId}`);
};

export const patchModifyMemo = async (data: MemoPatchType) => {
  return await instance.patch("/report/modify-memo", data);
};

export const WriteAPI = async (data: WriteType) => {
  return await instance.post("/report/apply", data);
};

export const getMemo = async (reportId: number) => {
  return await instance.get(`/report/query-memo/${reportId}`);
};

export const patchMemo = async (memo: MemoEditType) => {
  return await instance.patch("/report/modify-memo", {
    reportId: memo.reportId,
    memo: memo.memo,
  });
};

export const deleteApply = async (reportId: number) => {
  return await instance.delete(`/report/cancel/${reportId}`);
};
