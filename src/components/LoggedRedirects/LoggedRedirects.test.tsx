import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import LoggedRedirects from "./LoggedRedirects";
import { RouterAndState } from "../../types";
import { stateToMock } from "../../mocks/mocks";

describe("Given the component LoggedRedirects", () => {
  describe("When it is rendered with a container with the text `Hello world`", () => {
    test("Then it should show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const preloadedState = stateToMock().mock();

      const routerAndState: RouterAndState = {
        ui: <LoggedRedirects children={containerWithText} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.getByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a container with text `Hello world` and user that is logged", () => {
    test("Then it should shoudn't show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterAndState = {
        ui: <LoggedRedirects children={containerWithText} />,
        preloadedState: {
          user: { isLogged: true, token: "token" },
        },
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
