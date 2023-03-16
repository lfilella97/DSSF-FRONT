import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import StructureStyled from "./StructureStyled";
import { useAppSelector } from "../../store/hooks";
import { NavLink } from "react-router-dom";
import useStructures from "../../hooks/useStructures/useStructures";

interface StructureProps {
  structure: {
    elevation: string;
    name: string;
    type: string;
    location: string;
    image: string;
    id: string;
  };
}

const Structure = ({
  structure: { elevation, name, type, location, image, id },
}: StructureProps): JSX.Element => {
  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  const { deleteStructures } = useStructures();

  return (
    <StructureStyled className="structure">
      <div className="structure__wrap">
        <link rel="preload" href={image} as="image" />
        <img
          className="structure__image"
          width={268}
          height={200}
          alt={`the views of ${name}`}
          src={image}
        />
        <h2 className="structure__title">{name}</h2>
        <ul className="structure__info">
          <li>
            <FontAwesomeIcon name="elevation" icon={solid("mountain")} />
            <span>{elevation} meters</span>
          </li>
          <li>
            <FontAwesomeIcon name="elevation" icon={solid("layer-group")} />
            <span>{type}</span>
          </li>
          <li>
            <FontAwesomeIcon name="elevation" icon={solid("home")} />
            <span>{location}</span>
          </li>
        </ul>
      </div>

      {isLogged && (
        <span className="structure__buttons">
          <NavLink aria-label="modify" to={`structure/edit/${name}/${id}`}>
            <FontAwesomeIcon name="elevation" icon={solid("edit")} />
          </NavLink>
          <button aria-label="delete" onClick={() => deleteStructures(id)}>
            <FontAwesomeIcon name="elevation" icon={solid("trash")} />
          </button>
        </span>
      )}
    </StructureStyled>
  );
};

export default Structure;
