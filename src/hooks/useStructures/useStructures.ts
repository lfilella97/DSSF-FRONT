import { useCallback } from "react";
import modal from "../../modals/modals";
import { loadStructuresActionCreator } from "../../store/features/structures/structureSlice/structuresSlice";
import { useAppDispatch } from "../../store/hooks";
import { StructuresApi } from "../../types";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
} from "../../store/features/ui/uiSlice/uiSlice";

interface UseStrucutres {
  getStructures: () => Promise<void>;
}

const useStructures = (): UseStrucutres => {
  const dispatch = useAppDispatch();

  const getStructures = useCallback(async () => {
    const path = "/structures";
    dispatch(turnOnLoaderActionCreator());
    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API}${path}`!
      );

      if (!response.ok) {
        throw new Error();
      }

      const { structures }: StructuresApi = await response.json();

      dispatch(turnOffLoaderActionCreator());

      dispatch(loadStructuresActionCreator(structures));
    } catch (error) {
      dispatch(turnOffLoaderActionCreator());
      modal("Ups, something went wrong");
    }
  }, [dispatch]);

  return {
    getStructures,
  };
};

export default useStructures;
