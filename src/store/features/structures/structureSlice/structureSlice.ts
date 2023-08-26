import { emptyStructure } from "./../../../../mocks/mocks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StructureState } from "../../../../types";

const structureInitialState: StructureState = {
  structure: {
    ...emptyStructure,
  },
};

const structureSlice = createSlice({
  name: "structure",
  initialState: structureInitialState,
  reducers: {
    loadStructure: (
      currentState: StructureState,
      action: PayloadAction<StructureState>
    ): StructureState => ({
      ...currentState,
      ...action.payload,
    }),
  },
});

export const { loadStructure: loadStructureActionCreator } =
  structureSlice.actions;
export const structureReducer = structureSlice.reducer;
