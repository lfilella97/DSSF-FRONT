import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../../types";

const uiInitialState: UiState = { isLoading: false, modals: [] };
const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    turnOffLoader: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
    turnOnLoader: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export const {
  turnOffLoader: turnOffLoaderActionCreator,
  turnOnLoader: turnOnLoaderActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
