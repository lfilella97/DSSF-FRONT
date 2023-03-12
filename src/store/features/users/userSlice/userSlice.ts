import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../../types";

const userInitialState: UserState = { token: "", isLogged: false };
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (currentState: UserState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
    logOutUser: () => ({ ...userInitialState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
