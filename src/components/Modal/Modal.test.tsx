import { toast } from "react-toastify";
import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import { stateToMock } from "../../mocks/mocks";
import Modal from "./Modal";

const toastyErrorSpyed = jest.spyOn(toast, "error");
const toastySuccesSpyed = jest.spyOn(toast, "success");

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      const preloadedState = stateToMock()
        .turnErrorModalOn("Wrong credentials")
        .mock();

      renderWithRoutersAndProviders({
        ui: <Modal />,
        preloadedState,
      });

      expect(toastyErrorSpyed).toHaveBeenCalled();
    });
  });

  describe("When it is rendered with a non-error and the message 'You were successfully logged out!'", () => {
    test("Then it should render the ToastContainer Component for succes", () => {
      const preloadedState = stateToMock().turnModalOn("Success!").mock();

      renderWithRoutersAndProviders({
        ui: <Modal />,
        preloadedState,
      });

      expect(toastySuccesSpyed).toHaveBeenCalled();
    });
  });
});
