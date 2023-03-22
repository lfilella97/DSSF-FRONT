import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Structure from "../../components/Structure/Structure";
import { turnOnLoaderActionCreator } from "../../store/features/ui/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import StructuresStyled from "./StructuresPageStyled";

const StructuresPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    structures,
    ui: { isLoading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(turnOnLoaderActionCreator());
  }, [dispatch]);
  return (
    <StructuresStyled>
      <h2 className="structures__title">Structures:</h2>
      <Filter />
      <ul className="structures">
        {structures[0] &&
          structures.map((structure) => (
            <li key={structure.id}>
              <Structure structure={structure} />
            </li>
          ))}
        {!isLoading && !structures[0] && (
          <span className="structures__notFound">No structures found...</span>
        )}
      </ul>
    </StructuresStyled>
  );
};

export default StructuresPage;
