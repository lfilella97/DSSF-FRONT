export interface UserState {
  token: string;
  isLogged: boolean;
}

export type User = Pick<UserState, "token">;

export interface ErrorResponse {
  error: string;
}
export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UiState {
  isLoading: boolean;
  modals: string[];
}

export interface Structure {
  name: string;
  owner: string;
  type: string;
  coordenateX: string;
  coordenateY: string;
  elevation: string;
  creationTime: string;
  description: string;
}

export type Structures = Structure[];
