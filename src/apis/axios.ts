import axios from "axios";
import { Cookie } from "../utils/cookie";
import { reissue } from "./auth";

export const instance = axios.create({
  baseURL: "https://prod-server.xquare.app/jung-ho",
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = Cookie.get("accessToken");
    if (token) res.headers.Authorization = `Bearer ${token}`;
    return res;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const {
      response: { status },
    } = err;
    if (status === 403 || status === 401) {
      const token = Cookie.get("refreshToken");
      reissue(token)
        .then((res: any) => {
          Cookie.set("accessToken", res.data.accessToken);
          Cookie.set("refreshToken", res.data.refreshToken);
          Cookie.set("part", res.data.part);
        })
        .catch(() => {
          Cookie.remove("accessToken");
          Cookie.remove("refreshToken");
          Cookie.remove("part");
          if (
            window.location.href.split("/")[
              window.location.href.split("/").length - 1
            ] !== ""
          ) {
            window.location.href = "/";
          }
        });
    } else {
      window.location.href = "/";
    }
  }
);
