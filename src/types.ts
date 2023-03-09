export interface UserState {
  token: string;
  isLogged: boolean;
}

export type User = Pick<UserState, "token">;

export interface UserCredentials {
  userName: string;
  password: string;
}
