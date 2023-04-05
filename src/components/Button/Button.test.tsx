import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given the Button component", () => {
  describe("When it is rendered with the given `Login` text", () => {
    test("Then it should show a button with text `Login`", () => {
      renderWithProviders(<Button text="Login" />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the given sayHello function and user click it", () => {
    test("Then it should call the function sayHello", async () => {
      const sayHello = jest.fn();
      const buttonText = "hello";

      renderWithProviders(
        <Button
          text={buttonText}
          onClick={() => {
            sayHello();
          }}
        />
      );

      const renderedButton = screen.getByRole("button", { name: buttonText });

      await waitFor(async () => {
        await userEvent.click(renderedButton);
      });

      expect(sayHello).toBeCalled();
    });
  });
});
