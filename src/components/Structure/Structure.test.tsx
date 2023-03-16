import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders, {
  RouterAndState,
} from "../../testUtils/renderWithRouterAndProviders";
import Structure from "./Structure";

const mockDeleteStructure = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  deleteStructure: mockDeleteStructure,
}));

describe("Given the component Structure", () => {
  describe("When it is rendered with the `Aljub del mas de Roer`", () => {
    test("Then it should show a Structure with image", () => {
      const structure = {
        elevation: "455",
        name: "Bassa del mas de Roer",
        type: "string",
        id: "7342774",
        location: "La granadella",
        image:
          "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
        owner: "admin",
        coordenateX: "5689",
        coordenateY: "56789",
        creationTime: "56789",
        description: "its a structure",
      };
      const routeAndState: RouterAndState = {
        ui: <Structure structure={structure} />,
        preloadedState: {
          user: { isLogged: true, token: "dsx" },
        },
      };

      renderWithRoutersAndProviders(routeAndState);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the `Aljub del mas de Roer` and user is logged", () => {
    test("Then it should show a link to modify page", () => {
      const structure = {
        elevation: "455",
        name: "Bassa del mas de Roer",
        type: "string",
        id: "235453",
        location: "La granadella",
        image:
          "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
        owner: "admin",
        coordenateX: "5689",
        coordenateY: "56789",
        creationTime: "56789",
        description: "its a structure",
      };

      const routeAndState: RouterAndState = {
        ui: <Structure structure={structure} />,
        preloadedState: {
          user: { isLogged: true, token: "dsx" },
        },
      };

      renderWithRoutersAndProviders(routeAndState);

      const expectedLink = screen.getByRole("link", { name: "modify" });

      expect(expectedLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the `Aljub del mas de Roer` and user is logged and click on delete button", () => {
    test("Then it should call the deleteStructure function", async () => {
      const id = "456789";

      const structure = {
        elevation: "455",
        name: "Bassa del mas de Roer",
        type: "string",
        id,
        location: "La granadella",
        image:
          "https://sfxfnjejlztsnoxyochi.supabase.co/storage/v1/object/public/structures/Aljub%20del%20mas%20de%20Roer.jpg",
        owner: "admin",
        coordenateX: "5689",
        coordenateY: "56789",
        creationTime: "56789",
        description: "its a structure",
      };

      const routeAndState: RouterAndState = {
        ui: <Structure structure={structure} />,
        preloadedState: {
          user: { isLogged: true, token: "dsx" },
        },
      };

      renderWithRoutersAndProviders(routeAndState);

      const renderedButton = screen.getByRole("button", { name: "delete" });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(mockDeleteStructure).toBeCalledWith(id);
    });
  });
});
