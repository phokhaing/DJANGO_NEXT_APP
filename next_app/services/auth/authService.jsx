import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../apiService";

// fetch all users
export const authLogin = createAsyncThunk(
  "auth/token",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiService.post("auth/token/", credentials);
      localStorage.setItem("authTokens", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// find user by id
export const authTokenVerify = createAsyncThunk(
  "auth/",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await apiService.get(`auth/token/verify/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
