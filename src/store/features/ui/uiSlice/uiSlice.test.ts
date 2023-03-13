import { UiState } from "../../../../types";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given the ui reducer", () => {
  describe("When it receives the turn offLoader action", () => {
    test("Then it should turn of the loader", () => {
      const uiState: UiState = { isLoading: true, modals: [] };
      const expectedResult: UiState = { isLoading: false, modals: [] };

      const turnOffLoaderAction = turnOffLoaderActionCreator();

      const turnedOffLoader = uiReducer(uiState, turnOffLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOffLoader);
    });
  });

  describe("When it receives the turn onLoader action", () => {
    test("Then it should turn of the loader", () => {
      const uiState: UiState = { isLoading: false, modals: [] };
      const expectedResult: UiState = { isLoading: true, modals: [] };

      const turnOnLoaderAction = turnOnLoaderActionCreator();

      const turnedOnLoader = uiReducer(uiState, turnOnLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOnLoader);
    });
  });
});
