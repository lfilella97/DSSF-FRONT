import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const userInitialState: User = { userName: "", isLogged: false };
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (currentState: User, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
