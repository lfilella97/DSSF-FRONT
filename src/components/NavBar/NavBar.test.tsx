import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import NavBar from "./NavBar";
import { RouterAndState } from "../../types";
import { linksAndButtonsText } from "../../mocks/mocks";

const { home, login, map } = linksAndButtonsText;

describe("Given the component navBar", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with text `Home`", () => {
      const routerAndState: RouterAndState = {
        ui: <NavBar />,
      };

      renderWithRoutersAndProviders(routerAndState);

      const homeLink = screen.getByRole("link", { name: home });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Map`", () => {
      const routerAndState: RouterAndState = {
        ui: <NavBar />,
      };

      renderWithRoutersAndProviders(routerAndState);

      const mapLink = screen.getByRole("link", { name: map });

      expect(mapLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Login`", () => {
      const routerAndState: RouterAndState = {
        ui: <NavBar />,
      };

      renderWithRoutersAndProviders(routerAndState);

      const loginLink = screen.getByRole("link", { name: login });

      expect(loginLink).toBeInTheDocument();
    });
  });
});
