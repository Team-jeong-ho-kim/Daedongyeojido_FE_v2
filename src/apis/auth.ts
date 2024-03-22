import { LoginType } from "../types/type";
import { instance } from "./axios";

export const login = async (data: LoginType) => {
  return await instance.post("/auth/login", data);
};

export const reissue = async (refreshToken: string) => {
  return await instance.patch("/auth/reissue", { token: refreshToken });
};
