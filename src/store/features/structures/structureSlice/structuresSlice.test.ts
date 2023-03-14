import { Structures } from "../../../../types";
import {
  loadStructuresActionCreator,
  structuresReducer,
} from "./structuresSlice";

describe("Given the structure reducer", () => {
  describe("When it receives the loadStructures action with a list of three structures", () => {
    test("Then it should return a list of three structures", () => {
      const structureState: Structures = [];
      const payload: Structures = [
        {
          coordenateX: "23456",
          coordenateY: "3456",
          creationTime: "12/12/12",
          description: "a structure",
          elevation: "high",
          name: "structure",
          owner: "admin",
          type: "construction",
          image: "image.png",
          location: "La granadella",
          id: "2345678",
        },
      ];

      const loadStructuresAction = loadStructuresActionCreator(payload);

      const loadedStructures = structuresReducer(
        structureState,
        loadStructuresAction
      );

      expect(payload).toStrictEqual(loadedStructures);
    });
  });
});
