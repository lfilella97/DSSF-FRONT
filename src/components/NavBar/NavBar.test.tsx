import { screen } from "@testing-library/react";
import renderWithRouters from "../../testUtil/renderWithRuter";
import NavBar from "./NavBar";

describe("Given the component navBar", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with text `Home`", () => {
      const expectedHomeLink = "Home";

      renderWithRouters();

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Map`", () => {
      const expectedMapLink = "Map";

      renderWithRouters(<NavBar />);

      const mapLink = screen.getByRole("link", { name: expectedMapLink });

      expect(mapLink).toBeInTheDocument();
    });

    test("Then it should show a link with text `Add`", () => {
      const expectedAddLink = "Add";

      renderWithRouters(<NavBar />);

      const addLink = screen.getByRole("link", { name: expectedAddLink });

      expect(addLink).toBeInTheDocument();
    });

    test("Then it should show a button with text `Exit`", () => {
      const expectedButton = "Exit";

      renderWithRouters(<NavBar />);

      const button = screen.getByRole("button", { name: expectedButton });

      expect(button).toBeInTheDocument();
    });
  });
});
