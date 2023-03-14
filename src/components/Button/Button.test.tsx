import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives a the text `Login`", () => {
    test("Then it should show a button with text `Login`", () => {
      renderWithProviders(<Button text="Login"></Button>);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
