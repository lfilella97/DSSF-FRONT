import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import Detail from "./Detail";
import { stateToMock } from "../../mocks/mocks";
import { RouterAndState } from "../../types";

const mockDeleteStructure = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  deleteStructure: mockDeleteStructure,
}));

describe("Given the component Detail", () => {
  describe("When it is rendered with the `Bassa del mas de Roer`", () => {
    test("Then it should show a Structure with an image", () => {
      const preloadedState = stateToMock().setStructures(1).mock();

      const routeAndState: RouterAndState = {
        ui: <Detail structure={preloadedState.structures!.structures[0]} />,
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
      const linkText = "modify";

      const routeAndState: RouterAndState = {
        ui: <Detail structure={preloadedState.structures!.structures[0]} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const modifyLink = screen.getByRole("link", { name: linkText });

      expect(modifyLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the `Bassa del mas de Roer` and user is logged and click on delete button", () => {
    test("Then it should call the deleteStructure function", async () => {
      const id = "456789";
      const buttonText = "delete";

      const preloadedState = stateToMock()
        .setStructures(1, id)
        .logUser()
        .mock();

      const routeAndState: RouterAndState = {
        ui: <Detail structure={preloadedState.structures!.structures[0]} />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routeAndState);

      const renderedButton = screen.getByRole("button", { name: buttonText });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(mockDeleteStructure).toBeCalledWith(id);
    });
  });
});
