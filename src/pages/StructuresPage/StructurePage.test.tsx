import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import StructuresPage from "./StructuresPage";
import {
  linksAndButtonsText,
  stateToMock as newStateToMock,
} from "../../mocks/mocks";

let mockGetStructures = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  getStructures: mockGetStructures,
}));

const { loadMore } = linksAndButtonsText;

describe("Given the Structure page", () => {
  describe("When it is rendered with Bassa del mas de Roer structure", () => {
    test("Then it should show a card with a heading with text `Bassa del mas de roer`", () => {
      const preloadedState = newStateToMock().setStructures(1).mock();
      const headingText = "Bassa del mas de Roer";

      renderWithRoutersAndProviders({
        ui: <StructuresPage />,
        preloadedState,
      });

      const renderedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(renderedHeading).toBeInTheDocument();
    });

    test("Then it should call getStructures function", () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      expect(mockGetStructures).toBeCalled();
    });
  });

  describe("When it is rendered and the user select General option", () => {
    test("Then it should call get Structures function two times", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "General");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user select Water option", () => {
    test("Then it should call get Structures function two times", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Water");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user select Construction option", () => {
    test("Then it should call getStructures function two times", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Construction");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user click on load more button", () => {
    test("Then it should call getStructures function two times", async () => {
      const preloadedState = newStateToMock().setStructures(5).mock();

      renderWithRoutersAndProviders({
        ui: <StructuresPage />,
        preloadedState,
      });
      const renderedButton = screen.getByRole("button", { name: loadMore });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });
});
