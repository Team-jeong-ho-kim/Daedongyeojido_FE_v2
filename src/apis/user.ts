import { instance } from "./axios";

export const getMyInfo = async () => {
  return await instance.get("/user/my-info");
};

export const updataProfile = async (profileImageUrl: string) => {
  return await instance.patch("/user/update-profile", {
    profileImageUrl: profileImageUrl,
  });
};
