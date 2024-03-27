import { instance } from "./axios";

export const postQuest = async (data: {
  clubName: string;
  question: string;
}) => {
  return await instance.post("/question/quest", data);
};

export const getClubQuestion = async (clubName: string) => {
  return await instance.get(`/question/query/${clubName}`);
};

export const answerQuest = async (data: {
  clubQuestId: number;
  answer: string;
}) => {
  return await instance.post("question/answer", data);
};
