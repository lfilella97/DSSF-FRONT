import {
  deletedStructureActionCreator,
  loadMoreStructuresActionCreator,
  loadStructuresActionCreator,
  structuresReducer,
} from "./structuresSlice";
import { stateToMock } from "../../../../mocks/mocks";

describe("Given the structure reducer", () => {
  describe("When it receives the loadStructures action with a list of three structures", () => {
    test("Then it should return a list of three structures", () => {
      const { structures } = stateToMock().setStructures(3).mock();
      const initialStructures = stateToMock()
        .setStructures(3)
        .mock().structures;

      const loadStructuresAction = loadStructuresActionCreator(structures!);

      const loadedStructures = structuresReducer(
        structures,
        loadStructuresAction
      );

      expect(loadedStructures).toStrictEqual(initialStructures);
    });
  });

  describe("When it receives the deleteStructures with a list three structures", () => {
    test("Then it should return a list with two structures", () => {
      const { structures: structuresState } = stateToMock()
        .setStructures(3, "7342774")
        .mock();

      const initialStructures = stateToMock().setStructures(3).mock()
        .structures!;

      const payload = "7342774";
      const deleteStructuresAction = deletedStructureActionCreator(payload);

      const newState = structuresReducer(
        structuresState,
        deleteStructuresAction
      );

      const expectedStructures = newState.structures.length + 1;

      expect(initialStructures.structures.length).toStrictEqual(
        expectedStructures
      );
    });
  });

  describe("When it receives the loadStructures action with a list of one structures", () => {
    test("Then it should return a list of two structures", () => {
      const mockedState = stateToMock().setStructures(1).mock();

      const payload = stateToMock().setStructures(1).mock().structures!;

      const loadStructuresAction = loadMoreStructuresActionCreator(payload);

      const loadedStructures = structuresReducer(
        mockedState.structures,
        loadStructuresAction
      );

      expect(loadedStructures.structures.length).toStrictEqual(2);
    });
  });
});
