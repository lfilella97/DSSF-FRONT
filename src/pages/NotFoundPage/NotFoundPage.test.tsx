import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the Structure page", () => {
  describe("When it is rendered with Bassa del mas de Roer structure", () => {
    test("Then it should show a card with a heading with text `Bassa del mas de roer`", () => {
      renderWithRoutersAndProviders({
        ui: <NotFoundPage />,
      });

      const renderedHeading = screen.getByRole("heading", {
        name: "404 PAGE NOT FOUND",
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
