import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";
import { stateToMock } from "../../mocks/mocks";

const mockUseStructure = jest.fn();

jest.mock("../../hooks/useStructures/useStructures", () => () => ({
  createStructure: mockUseStructure,
}));

describe("Given the CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with text 'Add new structure'", () => {
      const headingText = "Add new structure";

      renderWithProviders(<CreateForm />);

      const renderedTitle = screen.getByRole("heading", {
        name: headingText,
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

  describe("When its rendered and the button is clicked with the fields fully written", () => {
    test("Then it should be called the function send form", async () => {
      const mockState = stateToMock().logUser().mock();

      const inputText = "Location:";
      const inputElevation = "Elevation:";
      const inputDescription = "Description:";
      const inputName = "Name:";
      const inputImage = "Image:";
      const buttonText = "Create";

      renderWithProviders(<CreateForm />, mockState);

      const renderedLabel = screen.getByLabelText(inputText);
      const renderedElevation = screen.getByLabelText(inputElevation);
      const renderedName = screen.getByLabelText(inputName);
      const renderedDescription = screen.getByLabelText(inputDescription);
      const renderedImage = screen.getByLabelText(inputImage);
      const renderedButton = screen.getByRole("button", { name: buttonText });

      const content = "Hello World";
      const blob = new Blob([content], { type: "text/plain" });
      const file = new File([blob], "hello.txt");

      await waitFor(async () => {
        await userEvent.type(renderedLabel, "bolicubo");
        await userEvent.upload(renderedImage, file);
      });
      await waitFor(async () => {
        await userEvent.type(renderedName, "bolicubo");
        await userEvent.type(renderedElevation, "456");
      });
      await waitFor(async () => {
        await userEvent.type(renderedDescription, "bernat");
        await userEvent.click(renderedButton);
      });

      expect(mockUseStructure).toBeCalled();
    });
  });
});
