import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import { StructureStructure } from "../../types";
import StructuresPage from "./StructuresPage";

let mockGetStructures = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  getStructures: mockGetStructures,
}));

const initialState: StructureStructure = {
  elevation: "455",
  coordenateX: "",
  coordenateY: "",
  creationTime: "",
  description: "",
  owner: "",
  name: "Bassa del mas de Roer",
  type: "string",
  id: "456789",
  location: "La granadella",
  image:
    "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
};
describe("Given the Structure page", () => {
  describe("When it is rendered with Bassa del mas de Roer structure", () => {
    test("Then it should show a card with a heading with text `Bassa del mas de roer`", () => {
      renderWithRoutersAndProviders({
        ui: <StructuresPage />,
        preloadedState: {
          structures: {
            currentPage: "",
            structures: [initialState],
            totalPages: 2,
            totalStructures: 5,
          },
        },
      });

      const renderedHeading = screen.getByRole("heading", {
        name: "Bassa del mas de Roer",
      });

      expect(renderedHeading).toBeInTheDocument();
    });

    test("Then it should call getStructures function", () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });

      expect(mockGetStructures).toBeCalled();
    });
  });

  describe("When it is rendered and the user select General option", () => {
    test("Then it should call get Structures function one more time", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "General");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user select Water option", () => {
    test("Then it should call get Structures function one more time", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Water");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user select Construction option", () => {
    test("Then it should call getStructures function one more time", async () => {
      renderWithRoutersAndProviders({ ui: <StructuresPage /> });
      const dropDown = screen.getByRole("combobox");

      await waitFor(async () => {
        await userEvent.selectOptions(dropDown, "Construction");
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });

  describe("When it is rendered and the user click on load more button", () => {
    test("Then it should call getStructures function one more time", async () => {
      renderWithRoutersAndProviders({
        ui: <StructuresPage />,
        preloadedState: {
          structures: {
            structures: [initialState],
            currentPage: "1",
            totalPages: 3,
            totalStructures: 5,
          },
        },
      });
      const renderedButton = screen.getByRole("button", { name: "Load more" });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(mockGetStructures).toBeCalledTimes(2);
    });
  });
});
