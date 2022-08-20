import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  totalPosts: 0,
  title: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.title = action.payload;
    },
    editPost: (state, action) => {
      state.title = action.payload;
    },
    deletePost: (state, action) => {
      state.title = action.payload;
    },
    allPosts: (state, action) => {
      state.title = action.payload;
    }
  },

  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     state.title = action.payload.post.title;
  //   },
  // },
});

export const {
  addPost,
  editPost,
  deletePost,
  allPosts
} = postSlice.actions;

export default postSlice.reducer;
