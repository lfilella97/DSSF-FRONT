import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../../store/features/users/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const path = "/user/login";

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API}${path}`!,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const user: User = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      localStorage.setItem("token", user.token);

      dispatch(loginUserActionCreator(user));
    } catch (error) {
      return new Error((error as Error).message);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("token");

    dispatch(logOutUserActionCreator());
  };

  const getStorageToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    dispatch(loginUserActionCreator({ token }));
  }, [dispatch]);

  return { loginUser, logOutUser, checkStorageToken: getStorageToken };
};

export default useUser;
