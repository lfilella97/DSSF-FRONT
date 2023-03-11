import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="header">
        <link rel="preload" href="images/DSSF-logo.svg" as="image" />
        <img
          className="header__logo"
          width="260"
          height="47"
          src={"images/DSSF-logo.svg"}
          alt="Dry stone structure finder logo"
        />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
