import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import Filter from "./Filter";
let mockGetStructures = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  getStructures: mockGetStructures,
}));

describe("Given the component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show a option with text `Filter by structures type`", () => {
      const expectedText = "Filter structures by type";

      renderWithRoutersAndProviders({ ui: <Filter /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `General`", () => {
      const expectedText = "General";

      renderWithRoutersAndProviders({ ui: <Filter /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `Water`", () => {
      const expectedText = "Water";

      renderWithRoutersAndProviders({ ui: <Filter /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with text `Construction`", () => {
      const expectedText = "Construction";

      renderWithRoutersAndProviders({ ui: <Filter /> });

      const renderedLabel = screen.getByRole("option", { name: expectedText });

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should call getStructures function", () => {
      renderWithRoutersAndProviders({ ui: <Filter /> });

      expect(mockGetStructures).toBeCalled();
    });
  });

  describe("When it is rendered and the user select General option", () => {
    test("Then it should call get Structures function with `General`", async () => {
      renderWithRoutersAndProviders({ ui: <Filter /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "General");
      });

      expect(mockGetStructures).toBeCalledWith("type", "General");
    });
  });

  describe("When it is rendered and the user select Water option", () => {
    test("Then it should call get Structures function with `Water`", async () => {
      renderWithRoutersAndProviders({ ui: <Filter /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Water");
      });

      expect(mockGetStructures).toBeCalledWith("type", "Water");
    });
  });

  describe("When it is rendered and the user select Construction option", () => {
    test("Then it should call get Structures function with `Construction`", async () => {
      renderWithRoutersAndProviders({ ui: <Filter /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Construction");
      });

      expect(mockGetStructures).toBeCalledWith("type", "Construction");
    });
  });
});
