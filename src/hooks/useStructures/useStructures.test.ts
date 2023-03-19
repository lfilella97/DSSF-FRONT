import { renderHook } from "@testing-library/react";
import { errorHandlers, getById, getByIDError } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import wrapper from "../../mocks/Wrapper";
import {
  deletedStructureActionCreator,
  loadStructuresActionCreator,
} from "../../store/features/structures/structureSlice/structuresSlice";
import { store } from "../../store/store";
import { Structure, Structures } from "../../types";
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

describe("Given the getStructure function", () => {
  describe("When it is called", () => {
    beforeEach(() => {
      server.resetHandlers(...getById);
    });
    test("Then it should call dispatch with a list of one Structure", async () => {
      const {
        result: {
          current: { getStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      const structure: Partial<Structure> = {};

      const actionCall = loadStructuresActionCreator([structure as Structure]);

      await getStructure("id");

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });
  describe("When it is called and throw an error", () => {
    beforeEach(() => {
      server.resetHandlers(...getByIDError);
    });
    test("Then it should't call dispatch", async () => {
      const {
        result: {
          current: { getStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      await getStructure("id");

      expect(spyDispatch).toBeCalledTimes(1);
    });
  });
});
