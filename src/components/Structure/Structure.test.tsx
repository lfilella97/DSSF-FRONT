import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import Structure from "./Structure";
import { RouterAndState } from "../../types";
import { stateToMock } from "../../mocks/mocks";

const mockDeleteStructure = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  deleteStructure: mockDeleteStructure,
}));

describe("Given the component Structure", () => {
  describe("When it is rendered with the `Bassa del mas de Roer`", () => {
    test("Then it should show a Structure with image", () => {
      const preloadedState = stateToMock().setStructures(1).mock();

      const routeAndState: RouterAndState = {
        ui: <Structure structure={preloadedState.structures!.structures[0]} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the `Bassa del mas de Roer` and user is logged", () => {
    test("Then it should show a link to modify page", () => {
      const preloadedState = stateToMock().setStructures(1).logUser().mock();
      const modifyText = "modify";

      const routeAndState: RouterAndState = {
        ui: <Structure structure={preloadedState.structures!.structures[0]} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const expectedLink = screen.getByRole("link", { name: modifyText });

      expect(expectedLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the `Bassa del mas de Roer` and user is logged and click on delete button", () => {
    test("Then it should call the deleteStructure function", async () => {
      const id = "456789";
      const preloadedState = stateToMock()
        .setStructures(1, id)
        .logUser()
        .mock();

      const deleteText = "delete";

      const routeAndState: RouterAndState = {
        ui: <Structure structure={preloadedState.structures!.structures[0]} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const renderedButton = screen.getByRole("button", { name: deleteText });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(mockDeleteStructure).toBeCalledWith(id);
    });
  });
});
