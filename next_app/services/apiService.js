import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useEffect } from "react";
import { setAuth } from "./auth/authSlice";

// const tokenKey =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxMDc1NjEwLCJpYXQiOjE2NjEwNzUzMTAsImp0aSI6ImJhODE2NDU0OTc0YzQ5MmM4NDM2N2FiNWI4ZGQxOGVkIiwidXNlcl9pZCI6MX0.jmoj60PSKPEzvkgLo43vDQGNksFquutqcN_BU7c12Jgfgs";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
let authTokens =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null;

const apiService = axios.create({
  baseURL,
  headers: {
    Authorization: `${authTokens ? "Bearer" + authTokens.access : ""}`,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

apiService.interceptors.request.use(async (req) => {
  authTokens = authTokens ? JSON.parse(authTokens) : null;

  if (!authTokens) {
    req.headers.Authorization = authTokens ? `Bearer ${authTokens.access}` : "";
  }

  const user = jwt_decode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  if (!isExpired) return req;

  // refresh token if expired
  const refreshToken = await axios.post(`${baseURL}auth/token/refresh/`, {
    refresh: authTokens.refresh,
  });

  // set new authTokens to storage
  typeof window !== "undefined"
    ? localStorage.setItem("authTokens", JSON.stringify(refreshToken.data))
    : "";

  // set new authTokens to header Authorization
  authTokens =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;

  req.headers.Authorization = `${
    authTokens ? "Bearer" + authTokens.access : ""
  }`;

  return req;
});

if (authTokens) {
  setAuth(authTokens);
}
export default apiService;
