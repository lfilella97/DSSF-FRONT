import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import StructureStyled from "./StructureStyled";

interface StructureProps {
  structure: {
    elevation: string;
    name: string;
    type: string;
    location: string;
    image: string;
  };
}

const Structure = ({
  structure: { elevation, name, type, location, image },
}: StructureProps): JSX.Element => {
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
      <span className="structure__buttons">
        <FontAwesomeIcon name="elevation" icon={solid("edit")} />
        <FontAwesomeIcon name="elevation" icon={solid("trash")} />
      </span>
    </StructureStyled>
  );
};

export default Structure;
