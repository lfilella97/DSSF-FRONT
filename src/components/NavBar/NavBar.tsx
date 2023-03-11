import { NavLink, useLocation } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <NavBarStyled className="navbar">
      <li className="navbar__container">
        <NavLink
          className={`navbar__text ${
            pathname === "/" ? "navbar__text--actual-page" : ""
          }`}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li className="navbar__container">
        <NavLink
          className={`navbar__text ${
            pathname === "/add-new-structure" ? "navbar__text--actual-page" : ""
          }`}
          to="add-new-structure"
        >
          {" "}
          Add{" "}
        </NavLink>
      </li>
      <li className="navbar__container">
        <NavLink
          className={`navbar__text ${
            pathname === "/map" ? "navbar__text--actual-page" : ""
          }`}
          to="map"
        >
          {" "}
          Map{" "}
        </NavLink>
      </li>
      <li className="navbar__container">
        <button className={`navbar__text`} disabled>
          {" "}
          Exit{" "}
        </button>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
