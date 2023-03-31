import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import Structure from "../../components/Structure/Structure";
import useStructures from "../../hooks/useStructures/useStructures";
import { turnOnLoaderActionCreator } from "../../store/features/ui/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import StructuresStyled from "./StructuresPageStyled";

const StructuresPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    structures: { structures, currentPage, totalStructures },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  const { getStructures } = useStructures();

  const filterAndLoadInitialState = {
    loadPage: "1",
    limit: 2,
    type: "",
    loadMore: false,
  };

  const [filterAndLoad, setFilterAndLoad] = useState(filterAndLoadInitialState);

  useEffect(() => {
    const params = new URLSearchParams({
      page: `${filterAndLoad.loadPage}`,
      limit: `${filterAndLoad.limit}`,
      type: `${filterAndLoad.type}`,
    });
    getStructures(params, filterAndLoad.loadMore);
    dispatch(turnOnLoaderActionCreator());
  }, [dispatch, getStructures, filterAndLoad]);

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterAndLoad({
      ...filterAndLoadInitialState,
      type: event.target.value,
    });
  };

  return (
    <StructuresStyled>
      <h2 className="structures__title">Structures:</h2>

      <Filter onChange={handleInputChange} type={filterAndLoad.type} />

      {structures[0] && (
        <ul className="structures">
          {structures.map((structure) => (
            <li key={structure.id}>
              <Structure structure={structure} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !structures[0] && (
        <span className="structures__notFound">No structures found...</span>
      )}

      {totalStructures !== structures.length && (
        <div className="structures__load-more">
          <Button
            text="Load more"
            onClick={() => {
              filterAndLoad.loadMore = true;
              filterAndLoad.loadPage = `${+currentPage + 1}`;
              setFilterAndLoad({
                ...filterAndLoad,
                loadPage: `${+currentPage + 1}`,
              });
            }}
          />
        </div>
      )}
    </StructuresStyled>
  );
};

export default StructuresPage;
