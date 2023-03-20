import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import CreateStructurePage from "./CreateStructurePage";

describe("Given the create structure page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Add new structure'", () => {
      const expectedHeading = "Add new structure";

      renderWithRoutersAndProviders({ ui: <CreateStructurePage /> });

      const renderedHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
