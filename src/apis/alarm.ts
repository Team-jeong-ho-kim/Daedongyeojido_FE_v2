import { instance } from "./axios";
import { AlarmPostType } from "../types/type";

export const getMyAlarm = async () => {
  return await instance.get("/alarm/my-alarm");
};

export const postITVresult = async (alarm: AlarmPostType) => {
  return await instance.post("/alarm/interview-result", alarm);
};
