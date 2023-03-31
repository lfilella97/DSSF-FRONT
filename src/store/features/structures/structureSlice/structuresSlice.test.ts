import { Structures, StructuresState } from "../../../../types";
import {
  deletedStructureActionCreator,
  loadMoreStructuresActionCreator,
  loadStructuresActionCreator,
  structuresReducer,
} from "./structuresSlice";

describe("Given the structure reducer", () => {
  describe("When it receives the loadStructures action with a list of three structures", () => {
    test("Then it should return a list of three structures", () => {
      const structureState: StructuresState = {
        structures: [],
        currentPage: "0",
        totalPages: 0,
        totalStructures: 0,
      };
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

      const loadStructuresAction = loadStructuresActionCreator({
        currentPage: "1",
        structures: payload,
        totalPages: 2,
        totalStructures: 5,
      });

      const loadedStructures = structuresReducer(
        structureState,
        loadStructuresAction
      );

      expect(payload).toStrictEqual(loadedStructures.structures);
    });
  });

  describe("When it receives the deleteStructures with a list with a structure", () => {
    test("Then it should return a list without the structure", () => {
      const structureState: StructuresState = {
        structures: [
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
        ],
        currentPage: "0",
        totalPages: 0,
        totalStructures: 0,
      };

      const payload = "2345678";
      const deleteStructuresAction = deletedStructureActionCreator(payload);

      const { structures } = structuresReducer(
        structureState,
        deleteStructuresAction
      );

      expect(structures).toStrictEqual([]);
    });
  });

  describe("When it receives the loadStructures action with a list of one structures", () => {
    test("Then it should return a list of two structures", () => {
      const structure = {
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
      };

      const structureState: StructuresState = {
        structures: [structure],
        currentPage: "0",
        totalPages: 0,
        totalStructures: 0,
      };
      const payload: StructuresState = {
        structures: [structure],
        currentPage: "0",
        totalPages: 0,
        totalStructures: 0,
      };

      const loadStructuresAction = loadMoreStructuresActionCreator(payload);

      const loadedStructures = structuresReducer(
        structureState,
        loadStructuresAction
      );

      expect(loadedStructures.structures.length).toStrictEqual(2);
    });
  });
});
