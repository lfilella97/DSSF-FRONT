import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import LoginForm from "./LoginForm";

describe("Given LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with text 'Register for the event'", () => {
      renderWithProviders(<LoginForm />);

      const renderedTitle = screen.getByRole("heading", {
        name: "Log in",
      });

      expect(renderedTitle).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'User name:'", () => {
      const inputText = "User name:";

      renderWithProviders(<LoginForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Password:'", () => {
      const inputText = "Password:";

      renderWithProviders(<LoginForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text `Log in`", () => {
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const renderedButton = screen.getByRole("button", { name: buttonText });

      expect(renderedButton).toBeInTheDocument();
    });
  });
});
