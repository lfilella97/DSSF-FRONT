import { screen } from "@testing-library/react";
import StructuresPage from "../../pages/StructuresPage/StructuresPage";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";

describe("Given the component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show a option with text `Filter by structures type`", () => {
      const expectedText = "Filter structures by type";

      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `General`", () => {
      const expectedText = "General";

      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `Water`", () => {
      const expectedText = "Water";

      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `Construction`", () => {
      const expectedText = "Construction";

      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });
  });
});
