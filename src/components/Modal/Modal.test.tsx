import renderWithRoutersAndProviders from "../../testUtils/renderWithRouterAndProviders";
import Modal from "./Modal";
import { toast } from "react-toastify";

const toastyErrorSpyed = jest.spyOn(toast, "error");
const toastySuccesSpyed = jest.spyOn(toast, "success");

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      renderWithRoutersAndProviders({
        ui: <Modal />,
        preloadedState: {
          ui: {
            isLoading: false,
            modals: { message: "Wrong credentials", error: true },
          },
        },
      });

      expect(toastyErrorSpyed).toHaveBeenCalled();
    });
  });

  describe("When it is rendered with a non-error and the message 'You were successfully logged out!'", () => {
    test("Then it should render the ToastContainer Component for succes", () => {
      renderWithRoutersAndProviders({
        ui: <Modal />,
        preloadedState: {
          ui: {
            isLoading: false,
            modals: { message: "Success!", error: false },
          },
        },
      });

      expect(toastySuccesSpyed).toHaveBeenCalled();
    });
  });
});
