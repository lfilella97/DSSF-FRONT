import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  StructuresState,
  UiState,
  UserState,
  StructureStructure,
} from "../types";

interface StateToMock {
  structures: StructuresState;
  ui: UiState;
  user: UserState;
  mock: () => PreloadedState<RootState>;
  logUser: () => StateToMock;
  setLoadingOn: () => StateToMock;
  turnModalOn: (message: string) => StateToMock;
  turnErrorModalOn: (message: string) => StateToMock;
  setStructures: (total: number, firstStructureId?: string) => StateToMock;
}

export const stateToMock = (): StateToMock => ({
  structures: mockStructuresState(),
  ui: { ...mockUiState },
  user: { ...mockUserState },

  mock() {
    return {
      structures: this.structures,
      ui: { ...this.ui },
      user: { ...this.user },
    };
  },

  logUser() {
    this.user = { ...loggedUser };
    return this;
  },

  setLoadingOn() {
    this.ui.isLoading = true;
    return this;
  },

  turnModalOn(message: string) {
    this.ui.modals = { message, error: false };
    return this;
  },

  turnErrorModalOn(message: string) {
    this.ui.modals = { message, error: true };
    return this;
  },

  setStructures(total: number, firstStructureId: string = "1234") {
    this.structures.structures =
      total <= 1
        ? [{ ...structures[0] }]
        : [
            { ...structures[0] },
            ...Array(total).fill({ ...structures[1] }),
          ].map((structure, index) => ({
            ...structure,
            id: `${index}123456789`,
          }));
    this.structures.structures[0].id = firstStructureId;
    this.structures.totalPages = Math.round(total / 2);
    return this;
  },
});

const mockUserState: UserState = { isLogged: false, token: "" };

const mockStructuresState = (): StructuresState => ({
  structures: [],
  currentPage: "0",
  totalPages: 0,
  totalStructures: 0,
});

const mockUiState: UiState = {
  isLoading: false,
  modals: { error: false, message: "" },
};

const loggedUser: UserState = {
  isLogged: true,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDc4ZWJjMjBiZGVjYjcxMzY0OTBlYSIsInVzZXJOYW1lIjoiYm9saWN1Ym8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzkxNTYyMjl9.vdiD83fGCX2K2tYYQmsP42OZMDdsrzmY88j1qeHN3mE",
};

const structures: StructureStructure[] = [
  {
    elevation: "455",
    name: "Bassa del mas de Roer",
    type: "Water",
    id: "7342774",
    location: "La granadella",
    image:
      "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
    owner: "admin",
    coordenateX: "5689",
    coordenateY: "56789",
    creationTime: "56789",
    description: "its a structure",
  },
  {
    elevation: "450",
    name: "Aljub SN08",
    type: "Construction",
    id: "7342434774",
    location: "La granadella",
    image:
      "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
    owner: "admin",
    coordenateX: "5682329",
    coordenateY: "567892332",
    creationTime: "56789233",
    description: "its another structure",
  },
];

export const linksAndButtonsText = {
  home: "Home",
  add: "Add",
  map: "Map",
  logout: "Logout",
  login: "Login",
  loadMore: "Load more",
};
