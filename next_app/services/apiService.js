import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useEffect } from "react";

// const tokenkey =
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjcyOTU1LCJpYXQiOjE2NjAyNzI2NTUsImp0aSI6IjM4NzY3MWNjYzBjYjQzMzhhOWMxMzUyYWVlYmYyZTE1IiwidXNlcl9pZCI6MX0.B_O8cy-7RnfoH_R3fw4oDYeLkDaXxgY91haOArKS9js";

// const baseURL = process.env.API_URL;
// let authTokens =
//   localStorage && localStorage.getItem("authTokens")
//     ? localStorage.getItem("authTokens")
//     : null;

const apiService = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: 'http://localhost:8000/api/',
  headers: {
    // Authorization: localStorage.getItem("access_token")
    //   ? "Bearer " + localStorage.getItem("access_token")
    //   : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// apiService.interceptors.request.use(async (req) => {
//   let authTokens = localStorage.getItem("authTokens");

//   if (!authTokens) {
//     authTokens = authTokens ? JSON.parse(authTokens.access) : null;
//     req.headers.Authorization = authTokens ? `Bearer ${authTokens.access}` : "";
//   }

// const user = jwt_decode(authTokens.access);
// const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
// if (!isExpired) return req;

// // refresh token if expired
// const response = await axios.post(`${baseURL}auth/token/refresh/`, {
//   refresh: authTokens.refresh,
// });

// localStorage.setItem("authTokens", response.data);
// req.headers.Authorization = `Bearer ${authTokens ? authTokens.access : ""}`;

// return req;
// });

// console.log(apiService);

export default apiService;
