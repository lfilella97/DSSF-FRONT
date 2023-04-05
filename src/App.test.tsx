import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { linksAndButtonsText, stateToMock } from "./mocks/mocks";
import renderWithRoutersAndProviders from "./testUtils/renderWithRouterAndProviders";
import { RouterAndState } from "./types";

const { add, home, login, logout, map } = linksAndButtonsText;

describe("Given the App", () => {
  describe("When it is rendered with a user loged in and user click on home link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const preloadedState = stateToMock().logUser().mock();

      const routerAndState: RouterAndState = {
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const homeLink = screen.getByRole("link", { name: home });

      await waitFor(async () => {
        await userEvent.click(homeLink);
      });

      const addLink = screen.getByRole("link", { name: add });
      const mapLink = screen.getByRole("link", { name: map });
      const button = screen.getByRole("button", { name: logout });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Add link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const preloadedState = stateToMock().logUser().mock();

      const routerAndState: RouterAndState = {
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      let addLink = screen.getByRole("link", { name: add });

      await waitFor(async () => {
        await userEvent.click(addLink);
      });

      const homeLink = screen.getByRole("link", { name: home });
      const mapLink = screen.getByRole("link", { name: map });
      const button = screen.getByRole("button", { name: logout });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Map link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const preloadedState = stateToMock().logUser().mock();

      const routerAndState: RouterAndState = {
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const mapLink = screen.getByRole("link", { name: map });

      await waitFor(async () => {
        await userEvent.click(mapLink);
      });

      const homeLink = screen.getByRole("link", { name: home });
      const addLink = screen.getByRole("link", { name: add });
      const button = screen.getByRole("button", { name: logout });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Logout button", () => {
    test("Then it should show three links with text `Home Map Login`", async () => {
      const preloadedState = stateToMock().logUser().mock();

      const routerAndState: RouterAndState = {
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const button = screen.getByRole("button", { name: logout });
      const homeLink = screen.getByRole("link", { name: home });
      const addLink = screen.getByRole("link", { name: add });
      const mapLink = screen.getByRole("link", { name: map });

      await waitFor(async () => {
        await userEvent.click(button);
      });

      const loginLink = screen.getByRole("link", { name: login });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).not.toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).not.toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered and user click on Login link", () => {
    test("Then it should show three links with text `Home Map Login`", async () => {
      renderWithRoutersAndProviders();

      const homeLink = screen.getByRole("link", { name: home });
      const mapLink = screen.getByRole("link", { name: map });
      const loginLink = screen.getByRole("link", { name: login });

      await waitFor(async () => {
        await userEvent.click(loginLink);
      });

      expect(homeLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });
});
