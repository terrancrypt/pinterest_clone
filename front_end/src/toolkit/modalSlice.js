import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  signUpModal: false,
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    loginModalReducer: (state, action) => {
      state.loginModal = action.payload;
    },
    signUpModalReducer: (state, action) => {
      state.signUpModal = action.payload;
    },
  },
});

export const { loginModalReducer, signUpModalReducer } = modalSlice.actions;

export default modalSlice.reducer;
