import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { turnOffModalActionCreator } from "../../store/features/ui/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import modal from "../../modal/modal";

const Modal = (): JSX.Element => {
  const {
    modals: { error, message },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    modal(message, error);

    dispatch(turnOffModalActionCreator());
  }, [dispatch, message, error]);

  return <ToastContainer />;
};

export default Modal;
