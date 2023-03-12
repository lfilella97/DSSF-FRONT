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
