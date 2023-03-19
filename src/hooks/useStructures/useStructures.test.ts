import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import wrapper from "../../mocks/Wrapper";
import {
  deletedStructureActionCreator,
  loadStructuresActionCreator,
} from "../../store/features/structures/structureSlice/structuresSlice";
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

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });
});

describe("Given the deleteStructure function", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with an id", async () => {
      const {
        result: {
          current: { deleteStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });
      const id = "123456789";
      const actionCall = deletedStructureActionCreator(id);

      await deleteStructure(id);

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });

  describe("When it is called with an id that dont exist on database", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it shouldn't call dispatch", async () => {
      const {
        result: {
          current: { deleteStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });
      const id = "123456789";

      await deleteStructure(id);

      expect(spyDispatch).not.toBeCalledWith();
    });
  });
});

describe("Given the createStructure function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch two times", async () => {
      const {
        result: {
          current: { createStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      await createStructure(new FormData());

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });

  describe("When it is called with wrong form data", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should dispatch two times", async () => {
      const {
        result: {
          current: { createStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      await createStructure(new FormData());

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });
});
