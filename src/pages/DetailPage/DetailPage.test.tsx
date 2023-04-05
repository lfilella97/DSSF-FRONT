import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import DetailPage from "./DetailPage";
import { RouterAndState } from "../../types";
import { stateToMock } from "../../mocks/mocks";

describe("Given the component Structure", () => {
  describe("When it is rendered with the `Bassa del mas de Roer`", () => {
    test("Then it should show a Structure with the heading `Bassa del mas de Roer`", () => {
      const preloadedState = stateToMock().setStructures(1).mock();
      const headingText = "Bassa del mas de Roer";
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const title = screen.getByRole("heading", {
        name: headingText,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is no Structures", () => {
    test("Then it should only show one heading", () => {
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
      };

      renderWithRoutersAndProviders(routeAndState);

      const title = screen.queryAllByRole("heading");

      expect(title.length).toBe(1);
    });
  });
});
