import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import { stateToMock } from "../../mocks/mocks";
import DetailPage from "./DetailPage";
import { RouterAndState } from "../../types";

let mockGetStructure = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  getStructure: mockGetStructure,
}));

describe("Given the component DetailPage", () => {
  describe("When it is rendered with the `Bassa del mas de Roer`", () => {
    const preloadedState = stateToMock().setStructure().mock();
    test("Then it should show a Structure with the heading `Bassa del mas de Roer`", () => {
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
    test("Then it should call getStructure function", () => {
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
        preloadedState,
      };
      renderWithRoutersAndProviders(routeAndState);

      expect(mockGetStructure).toBeCalled();
    });
  });

  describe("When it is rendered and there is no Structure", () => {
    test("Then it shouldn't show any heading", () => {
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
      };
      renderWithRoutersAndProviders(routeAndState);

      const title = screen.queryAllByRole("heading");

      expect(title.length).toBe(0);
    });

    test("Then it should call getStructure function", () => {
      const routeAndState: RouterAndState = {
        ui: <DetailPage />,
      };
      renderWithRoutersAndProviders(routeAndState);

      expect(mockGetStructure).toBeCalled();
    });
  });
});
