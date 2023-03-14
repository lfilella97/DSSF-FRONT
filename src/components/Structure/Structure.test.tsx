import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil/renderWithProviders";
import { StructureCard } from "../../types";
import Structure from "./Structure";

describe("Given the component Structure", () => {
  describe("When it is rendered with the `Aljub del mas de Roer`", () => {
    test("Then it should show a Structure with image", () => {
      const structure: StructureCard = {
        elevation: "455",
        name: "Bassa del mas de Roer",
        type: "string",
        id: "456789",
        location: "La granadella",
        image:
          "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
      };

      renderWithProviders(<Structure structure={structure} />);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
