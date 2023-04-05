import { screen } from "@testing-library/react";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import { RouterAndState } from "../../types";
import Layout from "./Layout";
import { stateToMock } from "../../mocks/mocks";

describe("Given the Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a logo with an alt text 'Dry stone structure finder logo'", () => {
      const expectedAltText = "Dry stone structure finder logo";

      const routerAndState: RouterAndState = { ui: <Layout /> };

      renderWithRoutersAndProviders(routerAndState);

      const imageWithAltText = screen.getByRole("img");

      expect(imageWithAltText).toHaveAccessibleName(expectedAltText);
    });
  });

  describe("When it is rendered and is loading", () => {
    test("Then it should apper the loader", () => {
      const preloadedState = stateToMock().setLoadingOn().mock();

      const expectedAltText = "This page is loading...";

      const routerAndState: RouterAndState = {
        ui: <Layout />,
        preloadedState,
      };

      renderWithRoutersAndProviders(routerAndState);

      const renderedLoader = screen.getByLabelText(expectedAltText);

      expect(renderedLoader).toBeInTheDocument();
    });
  });
});
