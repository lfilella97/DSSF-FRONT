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
      <ul className="structures">
        {structures.map((structure) => (
          <li key={structure.id}>
            <Structure structure={structure} />
          </li>
        ))}
      </ul>
    </StructuresStyled>
  );
};

export default StructuresPage;
