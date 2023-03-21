import { useEffect } from "react";
import Structure from "../../components/Structure/Structure";
import useStructures from "../../hooks/useStructures/useStructures";
import { useAppSelector } from "../../store/hooks";
import StructuresStyled from "./StructuresPageStyled";

const StructuresPage = (): JSX.Element => {
  const { structures } = useAppSelector((state) => state);

  const { getStructures } = useStructures();
  useEffect(() => {
    getStructures();
  }, [getStructures]);

  return (
    <StructuresStyled>
      <h2 className="structures__title">Structures:</h2>
      <ul className="structures">
        {structures[0] &&
          structures.map((structure) => (
            <li key={structure.id}>
              <Structure structure={structure} />
            </li>
          ))}
        {!structures[0] && (
          <span className="structures__notFound">No structures found...</span>
        )}
      </ul>
    </StructuresStyled>
  );
};

export default StructuresPage;
