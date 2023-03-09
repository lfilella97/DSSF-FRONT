import { UserState } from "../../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

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
});
