import modal from "../../modals/modals";
import { loadStructuresActionCreator } from "../../store/features/structures/structuresSlice";
import { useAppDispatch } from "../../store/hooks";
import { StructuresApi } from "../../types";

const useStructures = () => {
  const dispatch = useAppDispatch();

  const getStructures = async () => {
    const path = "/structures";

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API}${path}`!
      );

      const { structures }: StructuresApi = await response.json();

      dispatch(loadStructuresActionCreator(structures));
    } catch (error) {
      modal((error as Error).message, "error");
    }
  };

  return {
    getStructures,
  };
};

export default useStructures;
