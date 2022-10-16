import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
// import { authLogin, authTokenVerify } from "./authService";

// import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../apiService";

// fetch all users
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (credentials, { rejectWithValue }) => {
    console.log(apiService);
    try {
      const res = await apiService.post("auth/token/", credentials);
      localStorage.setItem("authTokens", JSON.stringify(res.data));

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } 
  }
);

// find user by id
export const authTokenVerify = createAsyncThunk(
  "auth/authTokenVerify",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await apiService.get(`auth/token/verify/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: [],
    loading: false,
    isAuthenticated: false,
    errors: false,
  },

  reducers: {
    setAuth: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.isAuthenticated = true;
      state.auth = payload;
    },
  },

  extraReducers: {
    // token
    [authLogin.pending]: (state) => {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    },
    [authLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.auth = payload;
    },
    [authLogin.rejected]: (state, { payload }) => {
      state.errors = payload;
      state.loading = false;
      state.isAuthenticated = false;
    },

    // token verify
    // [authTokenVerify.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [authTokenVerify.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.auth = payload;
    // },
    // [authTokenVerify.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.errors = payload;
    // },
  },
});

export const token = (state) => state.auth;
export const auth = (state) => state.auth;
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
