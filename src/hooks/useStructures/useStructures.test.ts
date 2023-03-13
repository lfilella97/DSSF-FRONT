import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import wrapper from "../../mocks/Wrapper";
import { loadStructuresActionCreator } from "../../store/features/structures/structureSlice/structuresSlice";
import { store } from "../../store/store";
import { Structures } from "../../types";
import useStructures from "./useStructures";

const spyDispatch = jest.spyOn(store, "dispatch");
beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given the getStructures function", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a list of structures", async () => {
      const {
        result: {
          current: { getStructures },
        },
      } = renderHook(() => useStructures(), { wrapper });

      const structures: Structures = [];

      const actionCall = loadStructuresActionCreator(structures);

      await getStructures();

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });
  describe("When it is called and throw an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should't call dispatch", async () => {
      const {
        result: {
          current: { getStructures },
        },
      } = renderHook(() => useStructures(), { wrapper });

      await getStructures();

      expect(spyDispatch).not.toBeCalled();
    });
  });
});
