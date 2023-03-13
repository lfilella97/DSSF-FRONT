import { PropsWithChildren, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser/useUser";
import NavBar from "../NavBar/NavBar";
import LayoutStyled from "./LayoutStyled";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { checkStorageToken } = useUser();

  useEffect(() => {
    checkStorageToken();
  }, [checkStorageToken]);

  return (
    <LayoutStyled>
      <header className="header">
        <link rel="preload" href="/images/DSSF-logo.svg" as="image" />
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
        <ToastContainer className="modal" />
        {children}
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
