import { stateToMock } from "../../../../mocks/mocks";
import { UserState } from "../../../../types";
import {
  loginUserActionCreator,
  userReducer,
  logOutUserActionCreator,
} from "./userSlice";

describe("Given the user reducer", () => {
  describe("When it receives a login action with an a user bernat", () => {
    test("Then it should login bernat", () => {
      const bernatUser: UserState = stateToMock().mock().user!;
      const expectedResult = true;

      const logInbernatAction = loginUserActionCreator(bernatUser);
      const { isLogged } = userReducer(bernatUser, logInbernatAction);

      expect(expectedResult).toStrictEqual(isLogged);
    });
  });

  describe("When it receives a logOut action having a user logged", () => {
    test("Then it should return a new state with user loged out", () => {
      const bernatUser: UserState = stateToMock().logUser().mock().user!;
      const expectedResult = false;

      const logOutAction = logOutUserActionCreator();
      const { isLogged } = userReducer(bernatUser, logOutAction);

      expect(expectedResult).toStrictEqual(isLogged);
    });
  });
});
