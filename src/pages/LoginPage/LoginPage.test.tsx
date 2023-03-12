import { screen } from "@testing-library/react";
import { PreloadedState } from "redux";
import Layout from "../../components/Layout/Layout";
import { RootState } from "../../store/features/store";
import renderWithProviders from "../../testUtil/renderWithProviders";
import renderWithRouters from "../../testUtil/renderWithRuter";
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
    describe("When it is rendered and the user is logged", () => {
      test("Then it should be an `Logout` button on the screen", () => {
        const buttonText = "Logout";
        let preloadedState: PreloadedState<RootState> = {
          user: { isLogged: true, token: "" },
        };

        renderWithRouters(<Layout />, preloadedState);

        const renderedButton = screen.getByRole("button", { name: buttonText });

        expect(renderedButton).toBeInTheDocument();
      });
    });
  });
});
