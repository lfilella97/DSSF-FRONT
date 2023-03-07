import { User } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the user reducer", () => {
  describe("When it receives a login action with an a user bernat", () => {
    test("Then it should login bernat", () => {
      const bernatUser: User = {
        userName: "bernat",
        isLogged: false,
      };

      const logInbernatAction = loginUserActionCreator(bernatUser);
      const loggedbernat = userReducer(bernatUser, logInbernatAction);

      expect(loggedbernat).toHaveProperty("isLogged", true);
    });
  });
});
