import { screen } from "@testing-library/react";
import renderWithRouters from "../../testUtil/renderWithRuter";
import { UserState } from "../../types";
import LoggedRedirects from "./LoggedRedirects";

describe("Given the component LoggedRedirects", () => {
  describe("When it is rendered with a container with text `Hello world` and user that is not logged", () => {
    test("Then it should show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const notLoggedUser: UserState = { isLogged: false, token: "" };

      renderWithRouters(<LoggedRedirects children={containerWithText} />, {
        user: notLoggedUser,
      });

      const expectedRenderedText = screen.getByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a container with text `Hello world` and user that is logged", () => {
    test("Then it should shoudn't show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const user: UserState = { isLogged: true, token: "token" };

      renderWithRouters(<LoggedRedirects children={containerWithText} />, {
        user,
      });

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
