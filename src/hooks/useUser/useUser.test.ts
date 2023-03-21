import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import wrapper from "../../mocks/Wrapper";
import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../../store/features/users/userSlice/userSlice";
import { store } from "../../store/store";
import { User } from "../../types";
import useUser from "./useUser";

const spyDispatch = jest.spyOn(store, "dispatch");
beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given the loginUser function", () => {
  describe("When it is called with the correct user credentials", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      const user: User = { token: "token" };

      const actionCall = loginUserActionCreator(user);

      await loginUser({ userName: "bernat", password: "bolis" });

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });

  describe("When it is called with the wrong user credentials", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should't call dispatch two times", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      await loginUser({
        userName: "adrian",
        password: "pallars",
      });

      expect(spyDispatch).toBeCalledTimes(3);
    });
  });
});

describe("Given the logOut function", () => {
  describe("When it is called", () => {
    test("Then it should logOut the user", () => {
      const {
        result: {
          current: { logOutUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      const actionCall = logOutUserActionCreator();
      logOutUser();

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });
});

describe("Given getStorageToken", () => {
  describe("When it is called and there isn`t a token in the local storage", () => {
    test("Then it shouldn`t login the user", () => {
      const {
        result: {
          current: { checkStorageToken },
        },
      } = renderHook(() => useUser(), { wrapper });

      checkStorageToken();

      expect(spyDispatch).not.toBeCalled();
    });
  });

  describe("When it is called and there is a token in the local storage", () => {
    test("Then it should login the user", () => {
      const {
        result: {
          current: { checkStorageToken },
        },
      } = renderHook(() => useUser(), { wrapper });

      localStorage.setItem("token", "token");

      const expectedDispatchCaller = loginUserActionCreator({ token: "token" });

      checkStorageToken();

      expect(spyDispatch).toBeCalledWith(expectedDispatchCaller);

      localStorage.removeItem("token");
    });
  });
});
