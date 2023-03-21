import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { checkStorageToken } = useUser();

  const { isLoading } = useAppSelector((state) => state.ui);

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
      <Suspense fallback={<Loading />}>
        <main className="content">
          <Outlet />
          <Modal />
        </main>
      </Suspense>
    </LayoutStyled>
  );
};

export default Layout;
