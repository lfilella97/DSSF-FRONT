import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given the lading page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader with alternative text 'This page is loading...'", () => {
      const expectedText = "This page is loading...";

      renderWithProviders(<Loading />);

      const renderedAltText = screen.getByLabelText(expectedText);

      expect(renderedAltText).toBeInTheDocument();
    });
  });
});
