import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyles";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
