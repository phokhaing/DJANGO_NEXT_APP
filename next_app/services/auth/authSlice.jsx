import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

import { authToken, authTokenVerify } from "./authService";

// fetch all users
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await authToken(credentials);
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// find user by id
export const authVerify = createAsyncThunk(
  "auth/authTokenVerify",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await authTokenVerify(id);
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
      console.log(payload);
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
    // [authVerify.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [authVerify.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.auth = payload;
    // },
    // [authVerify.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.errors = payload;
    // },
  },
});

export const auth = (state) => state.auth;
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
