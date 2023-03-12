import { screen } from "@testing-library/react";
import renderWithRouters from "../../testUtil/renderWithRuter";
import { UserState } from "../../types";
import ProtectedRoute from "./ProtectedRoute";

describe("Given the component ProtectedRoute", () => {
  describe("When it is rendered with a container with text `Hello world` and user with token", () => {
    test("Then it should show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const loggedUser: UserState = { isLogged: false, token: "token" };

      renderWithRouters(<ProtectedRoute children={containerWithText} />, {
        user: loggedUser,
      });

      const expectedRenderedText = screen.getByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a container with text `Hello world` and user without token", () => {
    test("Then it should shoudn't show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const user: UserState = { isLogged: false, token: "" };

      renderWithRouters(<ProtectedRoute children={containerWithText} />, {
        user,
      });

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
