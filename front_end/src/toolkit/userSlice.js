import { createSlice } from "@reduxjs/toolkit";
import localUserService from "../services/localUserService";

const initialState = {
  userInfo: localUserService.get(),
};

export const userInfo = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
        state.userInfo = action.payload
    },
  },
});


export const { setUserLogin } = userInfo.actions;

export default userInfo.reducer;
