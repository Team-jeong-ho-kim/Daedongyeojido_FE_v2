import { InquiryPostType } from "../types/type";
import { instance } from "./axios";

export const createInquiry = async (data: InquiryPostType) => {
  return await instance.post("/inquiry/create", data);
};
