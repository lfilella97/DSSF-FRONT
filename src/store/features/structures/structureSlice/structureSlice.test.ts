import { loadStructureActionCreator, structureReducer } from "./structureSlice";
import { stateToMock } from "../../../../mocks/mocks";

describe("Given the structure reducer", () => {
  describe("When it receives the loadStructure action with a list of three structure", () => {
    test("Then it should return a list of three structure", () => {
      const { structure } = stateToMock().setStructure().mock();
      const initialStructure = stateToMock().setStructure().mock().structure;

      const loadStructureAction = loadStructureActionCreator(structure!);

      const loadedStructure = structureReducer(structure, loadStructureAction);

      expect(loadedStructure).toStrictEqual(initialStructure);
    });
  });
});
