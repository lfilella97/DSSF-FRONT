import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders, {
  RouterAndState,
} from "../../testUtils/renderWithRouterAndProviders";
import DetailPage from "./DetailPage";

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
        ui: <DetailPage />,
        preloadedState: {
          user: { isLogged: true, token: "dsx" },
          structures: {
            currentPage: "",
            structures: [structure],
            totalPages: 2,
            totalStructures: 5,
          },
        },
      };

      renderWithRoutersAndProviders(routeAndState);

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is no Structures", () => {
    test("Then it should show a Structure with image", () => {
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
        preloadedState: {
          user: { isLogged: true, token: "dsx" },
          structures: {
            currentPage: "",
            structures: [],
            totalPages: 2,
            totalStructures: 5,
          },
        },
      };

      renderWithRoutersAndProviders(routeAndState);

      const title = screen.getByRole("heading", { name: "Structures:" });

      expect(title).toBeInTheDocument();
    });
  });
});
