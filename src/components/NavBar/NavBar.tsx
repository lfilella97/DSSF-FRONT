import { NavLink, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/features/hooks";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  const { logOutUser } = useUser();

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
        {!isLogged && (
          <NavLink className={`navbar__text`} to="login">
            {" "}
            Login{" "}
          </NavLink>
        )}

        {isLogged && (
          <button onClick={logOutUser} className={`navbar__text`}>
            {" "}
            {"Logout"}{" "}
          </button>
        )}
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
