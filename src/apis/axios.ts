import axios from "axios";
import { Cookie } from "../utils/cookie";
import { reissue } from "./auth";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
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
          window.location.reload();
        })
        .catch(() => {
          Cookie.remove("accessToken");
          Cookie.remove("refreshToken");
          window.location.href = "/";
        });
    } else {
      alert("오류가 발생했습니다");
      return Promise.reject(err);
    }
  }
);
