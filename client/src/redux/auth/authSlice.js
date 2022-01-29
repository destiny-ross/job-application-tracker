import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    value: 0,
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        userId: "4234234",
        firstName: "Erendira",
        lastName: "Ibarra",
        title: "UI Developer",
        imgUrl:
          "https://image.enjoymovie.net/aNaddnRwqbdI7K5pAZD84ntL_2k=/256x256/smart/core/p/Q0ARjPLVWl.jpg",
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, login, logout } =
  authReducer.actions;

export default authReducer.reducer;
