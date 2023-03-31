export interface UserState {
  token: string;
  isLogged: boolean;
}

export type User = Pick<UserState, "token">;

export interface ErrorResponse {
  error: string;
}

export type ApiUser = User | ErrorResponse;

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UiState {
  isLoading: boolean;
  modals: ModalStructure;
}

export interface ModalStructure {
  message: string;
  error: boolean;
}

export interface StructureStructure {
  name: string;
  owner: string;
  type: string;
  coordenateX: string;
  coordenateY: string;
  elevation: string;
  creationTime: string;
  description: string;
  location: string;
  image: string;
  id: string;
}

export type Structures = StructureStructure[];

export interface StructuresState {
  structures: Structures;
  currentPage: string;
  totalPages: number;
  totalStructures: number;
}
export interface StructuresApi {
  structures: Structures;
}

export interface StructureApi {
  structure: StructureStructure;
}

export type StructureCard = Pick<
  StructureStructure,
  "elevation" | "type" | "id" | "image" | "name" | "location"
>;

export interface DeletedResponse {
  deleted: string;
}

export interface CreatedResponse {
  message: string;
}

export type ApiStructures =
  | ErrorResponse
  | DeletedResponse
  | CreatedResponse
  | StructureApi
  | StructuresState;

export interface StructureFormData
  extends Pick<
    StructureStructure,
    "description" | "elevation" | "name" | "type" | "location"
  > {
  image: File | null;
}

export interface CustomJwtPayload {
  id: string;
  userName: string;
  isAdmin?: boolean;
}

export interface FilterAndPagination {
  filterType: string;
  page: string;
  limit: string;
}
