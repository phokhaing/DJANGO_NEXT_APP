import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

import axios from "axios";
import apiService from "../apiService";
import userService from "./userService";

// fetch all users
export const fetchAllUsers = createAsyncThunk(
  "users/",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// create user
export const createUser = createAsyncThunk(
  "users/",
  async (data, { rejectWithValue }) => {
    // try {
    //   const res = await userService.create(data);
    //   console.log(res);
    //   return res.data.results;
    // } catch (error) {
    //   return rejectWithValue(error.response.data);
    // }
  }
);

// update user
export const updateUser = createAsyncThunk(
  "/users/update",
  async ({ id, data }) => {
    // const res = await apiService.put(`/users/${id}`);
    // return res.data;
  }
);

// delete user
export const deleteUser = createAsyncThunk("/users/delete", async ({ id }) => {
  // await apiService.delete(`/users/${id}`);
  // return { id };
});

// find user by id
export const findUserById = createAsyncThunk("/users/", async ({ id }) => {
  // const res = await apiService.get(`/users/${id}`);
  // return res.data;
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    errors: {},
  },

  reducers: {
    fetchUsers: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    addUser(state, action) {
      state.loading = false;
      state.users = payload;
    },
    addPost: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },

  extraReducers: {
    [fetchAllUsers.pending]: (state) => {
      return {
        ...state,
        loading: true,
        errors: null,
      };
    },
    [fetchAllUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchAllUsers.rejected]: (state, { payload }) => {
      // const { payload } = action;
      state.loading = false;
      state.errors = payload;
    },

    // [createUser.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [createUser.fulfilled]: (state, { payload }) => {
    //   return {
    //     loading: false,
    //     users: payload,
    //   };
    // },
    // [createUser.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.errors = payload;
    // },

    // OR
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(checkIfEmailExists.fulfilled, (state: any, action) => {
    //       state.data = action.payload;
    //     })
    //     .addCase(checkIfEmailExists.rejected, (state: any, action) => {
    //       state.error = action.payload;
    //     });
    // },
  },
});

export const listAllUsers = (state) => state.users;
// export const { fetchUsers, addPost } = userSlice.actions;
export default userSlice.reducer;
