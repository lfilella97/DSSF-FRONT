import modal from "../../modals/modals";
import { loadStructuresActionCreator } from "../../store/features/structures/structuresSlice";
import { useAppDispatch } from "../../store/hooks";
import { ErrorResponse, StructuresApi } from "../../types";

const useStructures = () => {
  const dispatch = useAppDispatch();

  const getStructures = async () => {
    const path = "/structures";

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API}${path}`!
      );

      const strucutresApi: StructuresApi = await response.json();

      if (!response.ok) {
        const { error } = strucutresApi as unknown as ErrorResponse;
        throw new Error(error);
      }
      const { structures } = strucutresApi;

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
