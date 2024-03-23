import { instance } from "./axios";

export const createImage = async (image: Blob) => {
  const form = new FormData();
  form.append("image", image);

  return await instance.post("/image", form);
};
