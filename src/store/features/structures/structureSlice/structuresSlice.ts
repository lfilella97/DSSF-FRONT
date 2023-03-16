import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Structures } from "../../../../types";

const structuresInitialState: Structures = [];
const structuresSlice = createSlice({
  name: "structures",
  initialState: structuresInitialState,
  reducers: {
    loadStructures: (
      currentState: Structures,
      action: PayloadAction<Structures>
    ): Structures => [...action.payload],

    deleteStructure: (
      currentState,
      action: PayloadAction<string>
    ): Structures => [
      ...currentState.filter((structure) => structure.id !== action.payload),
    ],
  },
});

export const {
  loadStructures: loadStructuresActionCreator,
  deleteStructure: deletedStructureActionCreator,
} = structuresSlice.actions;
export const structuresReducer = structuresSlice.reducer;
