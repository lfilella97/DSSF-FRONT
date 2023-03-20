import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { checkStorageToken } = useUser();

  const {
    ui: { isLoading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    checkStorageToken();
  }, [checkStorageToken]);

  return (
    <LayoutStyled>
      {isLoading && <Loading />}
      <header className="header">
        <img
          className="header__logo"
          width="260"
          height="51"
          src={"/images/DSSF-logo.svg"}
          alt="Dry stone structure finder logo"
        />
      </header>
      <NavBar />
      <main className="content">
        <Suspense fallback={<Loading />}>
          <Outlet />
          <ToastContainer className="modal" />
        </Suspense>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
