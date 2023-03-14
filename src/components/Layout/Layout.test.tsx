import { screen } from "@testing-library/react";
import renderWithRouters from "../../testUtils/renderWithRuter";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a logo with an alt text 'Dry stone structure finder logo'", () => {
      const expectedAltText = "Dry stone structure finder logo";

      renderWithRouters(<Layout />);

      const imageWithAltText = screen.getByRole("img");

      expect(imageWithAltText).toHaveAccessibleName(expectedAltText);
    });
  });

  describe("When it is rendered and is loading", () => {
    test("Then it should apper the loader", () => {
      const expectedAltText = "This page is loading...";
      const loadingState = { ui: { isLoading: true, modals: [] } };

      renderWithRouters(<Layout />, loadingState);

      const renderedLoader = screen.getByLabelText(expectedAltText);

      expect(renderedLoader).toBeInTheDocument();
    });
  });
});
