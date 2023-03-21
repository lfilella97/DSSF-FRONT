import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useStructures from "../../hooks/useStructures/useStructures";
import { useAppSelector } from "../../store/hooks";
import DetailStyled from "./DetailStyled";

interface DetailProps {
  structure: {
    elevation: string;
    name: string;
    type: string;
    location: string;
    image: string;
    id: string;
    description: string;
    creationTime: string;
  };
}

const Detail = ({
  structure: {
    type,
    elevation,
    image,
    location,
    name,
    description,
    id,
    creationTime,
  },
}: DetailProps): JSX.Element => {
  const { deleteStructure } = useStructures();

  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  return (
    <DetailStyled>
      <h2 className="detail__title">{name}</h2>
      <link rel="preload" href={image} as="image" />
      <img
        className="detail__image"
        width={268}
        height={200}
        alt={`the views of ${name}`}
        src={image}
      />
      <ul className="detail__info">
        <li>
          <span>Type: {type}</span>
        </li>
        <li>
          <span>Elevation: {elevation}m</span>
        </li>
        <li>
          <span>Location: {location}</span>
        </li>
        <li>
          <span>Creation time: {creationTime}</span>
        </li>
      </ul>
      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">
          Description
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>{description}</p>
          </div>
        </div>
      </div>
      {isLogged && (
        <span className="detail__buttons">
          <NavLink aria-label="modify" to={`structure/edit/${name}/${id}`}>
            <FontAwesomeIcon name="elevation" icon={solid("edit")} />
          </NavLink>
          <NavLink to={"/home"}>
            <button aria-label="delete" onClick={() => deleteStructure(id)}>
              <FontAwesomeIcon name="elevation" icon={solid("trash")} />
            </button>
          </NavLink>
        </span>
      )}
    </DetailStyled>
  );
};

export default Detail;
