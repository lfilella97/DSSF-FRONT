import { UserState } from "../../../../types";
import {
  loginUserActionCreator,
  userReducer,
  logOutUserActionCreator,
} from "./userSlice";

describe("Given the user reducer", () => {
  describe("When it receives a login action with an a user bernat", () => {
    test("Then it should login bernat", () => {
      const bernatUser: UserState = {
        token: "",
        isLogged: false,
      };
      const expectedResult = { isLogged: true, token: "" };

      const logInbernatAction = loginUserActionCreator(bernatUser);
      const loggedbernat = userReducer(bernatUser, logInbernatAction);

      expect(expectedResult).toStrictEqual(loggedbernat);
    });
  });

  describe("When it receives a logOut action having a user logged", () => {
    test("Then it should return a new state with user loged out", () => {
      const bernatUser: UserState = {
        token: "",
        isLogged: true,
      };

      const expectedResult = {
        token: "",
        isLogged: false,
      };
      const logOutAction = logOutUserActionCreator();
      const loggedOut = userReducer(bernatUser, logOutAction);

      expect(expectedResult).toStrictEqual(loggedOut);
    });
  });
});
