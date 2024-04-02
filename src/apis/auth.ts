import axios from "axios";
import { LoginType } from "../types/type";
import { instance } from "./axios";

export const login = async (data: LoginType) => {
  console.log(data);

  return await instance.post("/auth/login", data);
};

export const reissue = async (refreshToken: string) => {
  return await axios.patch(
    "https://prod-server.xquare.app/jung-ho/auth/token",
    { token: refreshToken }
  );
};
