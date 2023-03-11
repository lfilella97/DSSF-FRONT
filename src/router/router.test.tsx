import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouters from "../testUtil/renderWithRuter";

describe("Given the component navBar", () => {
  describe("When it is renderefd", () => {
    test("Then it should show a link with text `Home`", async () => {
      const expectedAddLink = "Add";
      const expectedMapLink = "Map";

      renderWithRouters();
      let mapLink = screen.getByRole("link", { name: expectedMapLink });

      await waitFor(async () => {
        await userEvent.click(mapLink);
      });

      mapLink = screen.getByRole("link", { name: expectedMapLink });

      expect(mapLink).toBeInTheDocument();

      let addLink = screen.getByRole("link", { name: expectedAddLink });

      await waitFor(async () => {
        await userEvent.click(addLink);
      });

      addLink = screen.getByRole("link", { name: expectedAddLink });

      expect(addLink).toBeInTheDocument();
    });
  });
});
