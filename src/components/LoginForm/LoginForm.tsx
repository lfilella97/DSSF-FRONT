import Button from "../Button/Button";

const LoginForm = (): JSX.Element => {
  return (
    <form className="form">
      <h2 className="form__title">Log in</h2>
      <label className="form__text" htmlFor="userName">
        User name:
      </label>
      <input
        className="form__field"
        type="userName"
        placeholder="Introduce your userName"
        id="userName"
        name="userName"
        required
      />

      <label className="form__text" htmlFor="password">
        Password
      </label>
      <input
        className="form__field"
        type="password"
        placeholder="Introduce your password"
        id="password"
        name="password"
        required
      />

      <Button text="Log in" className="form__button" />
    </form>
  );
};

export default LoginForm;
