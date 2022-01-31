import { createSlice } from "@reduxjs/toolkit";

export const applicationsReducer = createSlice({
  name: "applications",
  initialState: {
    applications: null,
  },
  reducers: {
    getApplications: (state, action) => {
      state.applications = [
        {
          application_id: "0001",
          company: "Google",
          title: "Junior UI Developer",
          location: "Mountainview, CA",
          applicationDate: "2022-01-03T19:48:00.000Z",
          salaryMin: 75000,
          salaryMax: 90000,
        },
        {
          application_id: "0002",
          company: "Amazon",
          title: "Junior Web Developer",
          location: "Seattle, WA",
          applicationDate: "2022-01-05T19:48:00.000Z",
          salaryMin: 72000,
          salaryMax: 95000,
        },
      ];
    },
  },
});

export const { getApplications } = applicationsReducer.actions;

export default applicationsReducer.reducer;
