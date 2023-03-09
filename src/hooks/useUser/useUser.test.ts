import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import wrapper from "../../mocks/Wrapper";
import { store } from "../../store/features/store";
import useUser from "./useUser";

const spyDispatch = jest.spyOn(store, "dispatch");
beforeAll(() => {
  jest.clearAllMocks();
});
describe("Given the useUser function", () => {
  describe("When it is called with the correct user credentials", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      await loginUser({ userName: "bernat", password: "bolis" });

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with the wrong user credentials", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should throw the error 'Unauthorized'", async () => {
      const expectedError = new Error("Unauthorized");

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      const error = await loginUser({
        userName: "adrian",
        password: "pallars",
      });

      expect(expectedError).toStrictEqual(error);
    });
  });
});
