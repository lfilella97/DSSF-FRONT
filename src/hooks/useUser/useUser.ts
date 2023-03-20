import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  ApiUser,
  ErrorResponse,
  ModalStructure,
  User,
  UserCredentials,
} from "../../types";
import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../../store/features/users/userSlice/userSlice";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
  turnOnModalActionCreator,
} from "../../store/features/ui/uiSlice/uiSlice";

interface UseUser {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logOutUser: () => void;
  checkStorageToken: () => void;
}

const useUser = (): UseUser => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const path = "/user/login";

    dispatch(turnOnLoaderActionCreator());

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API}${path}`!,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const apiResponse: ApiUser = await response.json();

      if (!response.ok) {
        const { error } = apiResponse as ErrorResponse;
        throw new Error(error);
      }

      localStorage.setItem("token", (apiResponse as User).token);

      dispatch(turnOffLoaderActionCreator());
      dispatch(loginUserActionCreator(apiResponse as User));
    } catch (error) {
      dispatch(turnOffLoaderActionCreator());

      const modal: ModalStructure = {
        message: (error as Error).message,
        error: true,
      };
      dispatch(turnOnModalActionCreator(modal));
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("token");

    dispatch(logOutUserActionCreator());
  };

  const checkStorageToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    dispatch(loginUserActionCreator({ token }));
  }, [dispatch]);

  return { loginUser, logOutUser, checkStorageToken };
};

export default useUser;
