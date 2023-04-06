import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Filter from "./Filter";

describe("Given the component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show an option with text `Filter by structures type`", () => {
      const expectedText = "Filter structures by type";

      renderWithProviders(<Filter onChange={() => {}} value="" />);

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an option with text `General`", () => {
      const expectedText = "General";

      renderWithProviders(<Filter onChange={() => {}} value="" />);

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an option with text `Water`", () => {
      const expectedText = "Water";

      renderWithProviders(<Filter onChange={() => {}} value="" />);

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an option with text `Construction`", () => {
      const expectedText = "Construction";

      renderWithProviders(<Filter onChange={() => {}} value="" />);

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });
  });
});
