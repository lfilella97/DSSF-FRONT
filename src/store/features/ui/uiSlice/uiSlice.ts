import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal, UiState } from "../../../../types";

const uiInitialState: UiState = {
  isLoading: false,
  modals: { message: "", error: false },
};
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

    turnOnModal: (
      currentState: UiState,
      action: PayloadAction<Modal>
    ): UiState => ({ ...currentState, modals: { ...action.payload } }),

    turnOffModal: (currentState: UiState): UiState => ({
      ...currentState,
      modals: { message: "", error: false },
    }),
  },
});

export const {
  turnOffLoader: turnOffLoaderActionCreator,
  turnOnLoader: turnOnLoaderActionCreator,
  turnOnModal: turnOnModalActionCreator,
  turnOffModal: turnOffModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
