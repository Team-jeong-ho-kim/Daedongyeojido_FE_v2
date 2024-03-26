import { instance } from "./axios";

export const postQuest = async (data: {
  clubName: string;
  question: string;
}) => {
  return await instance.post("/question/quest", data);
};
