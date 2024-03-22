import { instance } from "./axios";

export const getMyInfo = async () => {
  return await instance.get("/user/my-info");
};
