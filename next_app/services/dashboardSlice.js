import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    pageTitle: "Dashboard",
    loading: false,
  },

  reducers: {
    setDashboard: (state, { payload }) => {
      state.loading = false;
      state.pageTitle = payload;
    },
  },
});

export const dashboardInfo = (state) => state.dashboard;
export const { setDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
