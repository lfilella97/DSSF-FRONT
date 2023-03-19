import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import CreateFormStyled from "../CreateForm/CreateFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialState: UserCredentials = {
    userName: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(initialState);
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

    setUserCredentials({ ...initialState });
  };

  return (
    <CreateFormStyled className="form" onSubmit={sendForm}>
      <div className="form__fields">
        <h2 className="form__title">Log in</h2>
        <label className="form__text" htmlFor="userName">
          User name:
        </label>
        <input
          onChange={handleUsername}
          className="form__field"
          type="userName"
          value={userCredentials.userName}
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
          value={userCredentials.password}
          placeholder="Introduce password"
          id="password"
          name="password"
          required
        />
      </div>

      <Button type="submit" text="Log in" className="form__button" />
    </CreateFormStyled>
  );
};

export default LoginForm;
