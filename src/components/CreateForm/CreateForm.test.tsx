import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

describe("Given CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with text 'Add new structure'", () => {
      renderWithProviders(<CreateForm />);

      const renderedTitle = screen.getByRole("heading", {
        name: "Add new structure",
      });

      expect(renderedTitle).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Name:'", () => {
      const inputText = "Name:";

      renderWithProviders(<CreateForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a select with the label 'Type:' asnd options general, water and construction", () => {
      const role = "option";

      renderWithProviders(<CreateForm />);

      const generalOption = screen.getByRole(role, { name: "General" });
      const waterOption = screen.getByRole(role, { name: "Water" });
      const constructionOption = screen.getByRole(role, {
        name: "Construction",
      });

      expect(generalOption).toBeInTheDocument();
      expect(waterOption).toBeInTheDocument();
      expect(constructionOption).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Location:'", () => {
      const inputText = "Location:";

      renderWithProviders(<CreateForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Elevation:'", () => {
      const inputText = "Elevation:";

      renderWithProviders(<CreateForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Image:'", () => {
      const inputText = "Image:";

      renderWithProviders(<CreateForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show an input with the label 'Description:'", () => {
      const inputText = "Description:";

      renderWithProviders(<CreateForm />);

      const renderedLabel = screen.getByLabelText(inputText);

      expect(renderedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text `Create`", () => {
      const buttonText = "Create";

      renderWithProviders(<CreateForm />);

      const renderedButton = screen.getByRole("button", { name: buttonText });

      expect(renderedButton).toBeInTheDocument();
    });
  });
});
