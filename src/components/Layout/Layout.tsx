import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="header">
        <img
          src={"images/DSSF-logo.svg"}
          alt="Dry stone structure finder logo"
        />
      </header>
    </LayoutStyled>
  );
};

export default Layout;
