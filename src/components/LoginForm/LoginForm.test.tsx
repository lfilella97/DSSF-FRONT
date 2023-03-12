import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtil/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with text 'Log in'", () => {
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
  describe("When its rendered and the button is clicked with the fields written", () => {
    test("Then it should be called the function send form", async () => {
      const inputUserNameText = "User name:";
      const inputPasswordText = "Password:";
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const renderedUserNameInput = screen.getByLabelText(inputUserNameText);
      const renderedPasswordInput = screen.getByLabelText(inputPasswordText);
      const renderedButton = screen.getByRole("button", { name: buttonText });

      const expectedCall = {
        userName: "bolicubo",
        password: "bernat",
      };

      await waitFor(async () => {
        await userEvent.type(renderedUserNameInput, "bolicubo");
        await userEvent.type(renderedPasswordInput, "bernat");
        await userEvent.click(renderedButton);
      });

      expect(mockLoginUser).toBeCalledWith(expectedCall);
    });
  });
});
