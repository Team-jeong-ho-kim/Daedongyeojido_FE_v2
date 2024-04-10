import { instance } from "./axios";
import { AlarmKindType, AlarmPostType } from "../types/type";

export const getMyAlarm = async () => {
  return await instance.get("/alarm/my-alarm");
};

export const postITVresult = async (alarm: AlarmPostType) => {
  return await instance.post("/alarm/interview-result", alarm);
};

type CancelType = {
  reportId: number;
  classNumber: number;
  alarmType: AlarmKindType;
};

export const cancelAlarm = async (data: CancelType) => {
  return await instance.delete("/alarm/cancel", {
    data: data,
  });
};
