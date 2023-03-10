import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="form">
      <div className="form__fields">
        <h2 className="form__title">Log in</h2>
        <label className="form__text" htmlFor="userName">
          User name:
        </label>
        <input
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
