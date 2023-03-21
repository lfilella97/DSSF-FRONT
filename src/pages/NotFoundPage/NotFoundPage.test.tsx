import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the Not Found Page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text `404 Page not found`", () => {
      renderWithRoutersAndProviders({
        ui: <NotFoundPage />,
      });

      const renderedHeading = screen.getByText("404 Page not found");

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
