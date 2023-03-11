import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil/renderWithProviders";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a logo with an alt text 'Dry stone structure finder logo'", () => {
      const expectedAltText = "Dry stone structure finder logo";

      renderWithProviders(<Layout />);

      const imageWithAltText = screen.getByRole("img");

      expect(imageWithAltText).toHaveAccessibleName(expectedAltText);
    });
  });
});
