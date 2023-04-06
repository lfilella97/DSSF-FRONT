import { stateToMock } from "../../../../mocks/mocks";
import { UiState } from "../../../../types";
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
      const uiState: UiState = stateToMock().setLoadingOn().mock().ui!;

      const expectedResult: UiState = stateToMock().mock().ui!;

      const turnOffLoaderAction = turnOffLoaderActionCreator();

      const turnedOffLoader = uiReducer(uiState, turnOffLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOffLoader);
    });
  });

  describe("When it receives the turn onLoader action", () => {
    test("Then it should turn of the loader", () => {
      const uiState: UiState = stateToMock().mock().ui!;

      const expectedResult: UiState = stateToMock().setLoadingOn().mock().ui!;

      const turnOnLoaderAction = turnOnLoaderActionCreator();

      const turnedOnLoader = uiReducer(uiState, turnOnLoaderAction);

      expect(expectedResult).toStrictEqual(turnedOnLoader);
    });
  });

  describe("When it receives the turn onModal action with a message `Error`", () => {
    test("Then it should turn on the Modal with message 'Error", () => {
      const uiState: UiState = stateToMock().mock().ui!;
      const { modals } = stateToMock().turnErrorModalOn(`Error`).mock().ui!;

      const expectedResult: UiState = stateToMock()
        .turnErrorModalOn(`Error`)
        .mock().ui!;

      const turnOnModalAction = turnOnModalActionCreator(modals);

      const turnedOnModal = uiReducer(uiState, turnOnModalAction);

      expect(expectedResult).toStrictEqual(turnedOnModal);
    });
  });

  describe("When it receives the turn offModal action", () => {
    test("Then it should turn off the Modal", () => {
      const uiState: UiState = stateToMock().turnErrorModalOn(`Error`).mock()
        .ui!;

      const expectedResult: UiState = stateToMock().mock().ui!;

      const turnOffModalAction = turnOffModalActionCreator();

      const turnedOffModal = uiReducer(uiState, turnOffModalAction);

      expect(expectedResult).toStrictEqual(turnedOffModal);
    });
  });
});
