import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StructuresState } from "../../../../types";

const structuresInitialState: StructuresState = {
  structures: [],
  currentPage: "0",
  totalPages: 0,
  totalStructures: 0,
};

const structuresSlice = createSlice({
  name: "structures",
  initialState: structuresInitialState,
  reducers: {
    loadStructures: (
      currentState: StructuresState,
      action: PayloadAction<StructuresState>
    ): StructuresState => ({
      ...action.payload,
    }),

    deleteStructure: (
      currentState: StructuresState,
      action: PayloadAction<string>
    ): StructuresState => ({
      ...currentState,
      totalStructures: currentState.totalStructures - 1,
      structures: [
        ...currentState.structures.filter(
          (structure) => structure.id !== action.payload
        ),
      ],
    }),
    loadMoreStructures: (
      currentState: StructuresState,
      action: PayloadAction<StructuresState>
    ): StructuresState => ({
      ...action.payload,
      structures: [...currentState.structures, ...action.payload.structures],
    }),
  },
});

export const {
  loadStructures: loadStructuresActionCreator,
  deleteStructure: deletedStructureActionCreator,
  loadMoreStructures: loadMoreStructuresActionCreator,
} = structuresSlice.actions;
export const structuresReducer = structuresSlice.reducer;
