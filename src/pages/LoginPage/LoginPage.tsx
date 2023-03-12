import { Navigate } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/features/hooks";
import LoginPageStyled from "./LoginPageStyles";

const LoginPage = (): JSX.Element => {
  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  return isLogged ? (
    <Navigate to={"/home"} replace={true} />
  ) : (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
