import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given the login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Log in'", () => {
      const expectedHeading = "Log in";

      renderWithProviders(<LoginPage />);

      const renderedHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
