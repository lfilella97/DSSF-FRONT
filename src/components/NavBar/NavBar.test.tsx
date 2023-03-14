import { PreloadedState } from "@reduxjs/toolkit";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RootState } from "../../store/store";
import renderWithRouters from "../../testUtils/renderWithRuter";
import NavBar from "./NavBar";

describe("Given the component navBar", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with text `Home`", () => {
      const expectedHomeLink = "Home";

      renderWithRouters(<NavBar />);

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Map`", () => {
      const expectedMapLink = "Map";

      renderWithRouters(<NavBar />);

      const mapLink = screen.getByRole("link", { name: expectedMapLink });

      expect(mapLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Login`", () => {
      const expectedButton = "Login";

      renderWithRouters(<NavBar />);

      const loginLink = screen.getByRole("link", { name: expectedButton });

      expect(loginLink).toBeInTheDocument();
    });
  });
});

describe("Given the navBar with real router", () => {
  describe("When it is rendered with a user loged in and user click on home link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const expectedHomeLink = "Home";
      const expectedAddLink = "Add";
      const expectedMapLink = "Map";
      const expectedButton = "Logout";

      const preloadState: PreloadedState<RootState> = {
        user: { isLogged: true, token: "token" },
        ui: { isLoading: false, modals: [] },
        structures: [],
      };

      renderWithRouters(false as unknown as React.ReactElement, preloadState);
      let homeLink = screen.getByRole("link", { name: expectedHomeLink });

      await waitFor(async () => {
        await userEvent.click(homeLink);
      });

      const addLink = screen.getByRole("link", { name: expectedAddLink });
      const mapLink = screen.getByRole("link", { name: expectedMapLink });
      const button = screen.getByRole("button", { name: expectedButton });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Add link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const expectedHomeLink = "Home";
      const expectedAddLink = "Add";
      const expectedMapLink = "Map";
      const expectedButton = "Logout";

      const preloadState = {
        user: { isLogged: true, token: "token" },
      };

      renderWithRouters(false as unknown as React.ReactElement, preloadState);

      let addLink = screen.getByRole("link", { name: expectedAddLink });

      await waitFor(async () => {
        await userEvent.click(addLink);
      });

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });
      const mapLink = screen.getByRole("link", { name: expectedMapLink });
      const button = screen.getByRole("button", { name: expectedButton });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Map link", () => {
    test("Then it should show three links with text `Home Add Map` and a button `Logout`", async () => {
      const expectedHomeLink = "Home";
      const expectedAddLink = "Add";
      const expectedMapLink = "Map";
      const expectedButton = "Logout";

      const preloadState = {
        user: { isLogged: true, token: "token" },
      };

      renderWithRouters(false as unknown as React.ReactElement, preloadState);

      const mapLink = screen.getByRole("link", { name: expectedMapLink });

      await waitFor(async () => {
        await userEvent.click(mapLink);
      });

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });
      const addLink = screen.getByRole("link", { name: expectedAddLink });
      const button = screen.getByRole("button", { name: expectedButton });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user loged in and user click on Logout button", () => {
    test("Then it should show three links with text `Home Map Login`", async () => {
      const expectedHomeLink = "Home";
      const expectedAddLink = "Add";
      const expectedMapLink = "Map";
      const expectedButton = "Logout";
      const expectedLoginLink = "Login";

      const preloadState = {
        user: { isLogged: true, token: "token" },
      };

      renderWithRouters(false as unknown as React.ReactElement, preloadState);

      const button = screen.getByRole("button", { name: expectedButton });
      const homeLink = screen.getByRole("link", { name: expectedHomeLink });
      const addLink = screen.getByRole("link", { name: expectedAddLink });
      const mapLink = screen.getByRole("link", { name: expectedMapLink });

      await waitFor(async () => {
        await userEvent.click(button);
      });

      const loginLink = screen.getByRole("link", { name: expectedLoginLink });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).not.toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(button).not.toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered and user click on Login link", () => {
    test("Then it should show three links with text `Home Map Login`", async () => {
      const expectedHomeLink = "Home";
      const expectedMapLink = "Map";
      const expectedLoginLink = "Login";

      renderWithRouters();

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });
      const mapLink = screen.getByRole("link", { name: expectedMapLink });
      const loginLink = screen.getByRole("link", { name: expectedLoginLink });

      await waitFor(async () => {
        await userEvent.click(loginLink);
      });

      expect(homeLink).toBeInTheDocument();
      expect(mapLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });
});
