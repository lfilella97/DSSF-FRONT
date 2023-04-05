import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import ProtectedRoute from "./ProtectedRoute";
import { RouterAndState } from "../../types";
import { stateToMock } from "../../mocks/mocks";

const text = "Hello world";

describe("Given the component ProtectedRoute", () => {
  describe("When it is rendered with the text `Hello world` and user with token", () => {
    test("Then it should show the text `Hello world`", () => {
      const preloadedState = stateToMock().logUser().mock();

      const routerAndState: RouterAndState = {
        ui: <ProtectedRoute children={text} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.getByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the text `Hello world` and user without token", () => {
    test("Then it should shoudn't show the text `Hello world`", () => {
      const routerAndState: RouterAndState = {
        ui: <ProtectedRoute children={text} />,
      };

      renderWithRoutersAndProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
