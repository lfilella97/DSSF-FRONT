import { ModalStructure, UiState } from "../../../../types";
import {
  turnOffLoaderActionCreator,
  turnOffModalActionCreator,
  turnOnLoaderActionCreator,
  turnOnModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given the ui reducer", () => {
  describe("When it receives the turn offLoader action", () => {
    test("Then it should turn of the loader", () => {
      const uiState: UiState = {
        isLoading: true,
        modals: { message: "", error: false },
      };
      const expectedResult: UiState = {
        isLoading: false,
        modals: { message: "", error: false },
      };

      const turnOffLoaderAction = turnOffLoaderActionCreator();

      const turnedOffLoader = uiReducer(uiState, turnOffLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOffLoader);
    });
  });

  describe("When it receives the turn onLoader action", () => {
    test("Then it should turn of the loader", () => {
      const uiState: UiState = {
        isLoading: false,
        modals: { message: "", error: false },
      };
      const expectedResult: UiState = {
        isLoading: true,
        modals: { message: "", error: false },
      };

      const turnOnLoaderAction = turnOnLoaderActionCreator();

      const turnedOnLoader = uiReducer(uiState, turnOnLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOnLoader);
    });
  });

  describe("When it receives the turn onModal action with a message `Error`", () => {
    test("Then it should turn on the Modal with message 'Error", () => {
      const uiState: UiState = {
        isLoading: false,
        modals: { message: "", error: false },
      };
      const modal: ModalStructure = { message: "error", error: true };

      const expectedResult: UiState = {
        isLoading: false,
        modals: { message: "error", error: true },
      };

      const turnOnModalAction = turnOnModalActionCreator(modal);

      const turnedOnModal = uiReducer(uiState, turnOnModalAction);

      expect(expectedResult).toStrictEqual(turnedOnModal);
    });
  });

  describe("When it receives the turn offModal action", () => {
    test("Then it should turn off the Modal", () => {
      const uiState: UiState = {
        isLoading: false,
        modals: { message: "error", error: true },
      };

      const expectedResult: UiState = {
        isLoading: false,
        modals: { message: "", error: false },
      };

      const turnOffModalAction = turnOffModalActionCreator();

      const turnedOffModal = uiReducer(uiState, turnOffModalAction);

      expect(expectedResult).toStrictEqual(turnedOffModal);
    });
  });
});
