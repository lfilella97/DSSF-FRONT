import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  const { logOutUser } = useUser();

  return (
    <NavBarStyled className="navbar">
      <li className="navbar__container">
        <NavLink className={`navbar__text`} to="/">
          {" "}
          Home{" "}
        </NavLink>
      </li>
      {isLogged && (
        <li className="navbar__container">
          <NavLink className={`navbar__text`} to="add-new-structure">
            {" "}
            Add{" "}
          </NavLink>
        </li>
      )}
      <li className="navbar__container">
        <NavLink className={`navbar__text`} to="map">
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
          <button
            onClick={logOutUser}
            type={"button"}
            className={`navbar__text`}
          >
            {" "}
            Logout{" "}
          </button>
        )}
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
