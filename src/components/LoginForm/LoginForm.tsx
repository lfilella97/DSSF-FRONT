import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
  } as UserCredentials);
  let { password, userName } = userCredentials;

  const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    userName = (event.target as HTMLInputElement).value;

    setUserCredentials({ password, userName });
  };
  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    password = (event.target as HTMLInputElement).value;

    setUserCredentials({ password, userName });
  };

  const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser(userCredentials);
  };

  return (
    <LoginFormStyled className="form" onSubmit={sendForm}>
      <div className="form__fields">
        <h2 className="form__title">Log in</h2>
        <label className="form__text" htmlFor="userName">
          User name:
        </label>
        <input
          onChange={handleUsername}
          className="form__field"
          type="userName"
          placeholder="Introduce user name"
          id="userName"
          name="userName"
          required
        />

        <label className="form__text" htmlFor="password">
          Password:
        </label>
        <input
          onChange={handlePassword}
          className="form__field"
          type="password"
          placeholder="Introduce password"
          id="password"
          name="password"
          required
        />
      </div>

      <Button text="Log in" className="form__button" />
    </LoginFormStyled>
  );
};

export default LoginForm;
