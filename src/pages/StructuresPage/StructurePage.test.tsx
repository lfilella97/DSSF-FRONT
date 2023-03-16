import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import { Structure } from "../../types";
import StructuresPage from "./StructuresPage";

describe("Given the Structure page", () => {
  describe("When it is rendered with Bassa del mas de Roer structure", () => {
    test("Then it should show a card with a heading with text `Bassa del mas de roer`", () => {
      const initialState: Structure = {
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
      renderWithRoutersAndProviders({
        ui: <StructuresPage />,
        preloadedState: {
          structures: [initialState],
        },
      });

      const renderedHeading = screen.getByRole("heading", {
        name: "Bassa del mas de Roer",
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
