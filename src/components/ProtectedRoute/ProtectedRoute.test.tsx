import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders, {
  RouterAndState,
} from "../../testUtils/renderWithRouterAndProviders";
import ProtectedRoute from "./ProtectedRoute";

describe("Given the component ProtectedRoute", () => {
  describe("When it is rendered with a container with text `Hello world` and user with token", () => {
    test("Then it should show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterAndState = {
        ui: <ProtectedRoute children={containerWithText} />,
        preloadedState: {
          user: { isLogged: false, token: "token" },
        },
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.getByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a container with text `Hello world` and user without token", () => {
    test("Then it should shoudn't show the container with text `Hello world`", () => {
      const text = "Hello world";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterAndState = {
        ui: <ProtectedRoute children={containerWithText} />,
        preloadedState: {
          user: { isLogged: false, token: "" },
        },
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
