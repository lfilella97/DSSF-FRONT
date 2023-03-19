import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import CreateStructurePage from "./CreateStructurePage";

describe("Given the create structure page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Add new structure'", () => {
      const expectedHeading = "Add new structure";

      renderWithProviders(<CreateStructurePage />);

      const renderedHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
