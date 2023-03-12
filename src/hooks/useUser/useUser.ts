import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../../store/features/users/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types";

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

  return { loginUser, logOutUser };
};

export default useUser;
