import { useCallback } from "react";
import modal from "../../modals/modals";
import {
  deletedStructureActionCreator,
  loadStructuresActionCreator,
} from "../../store/features/structures/structureSlice/structuresSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ApiStructures,
  DeletedResponse,
  ErrorResponse,
  StructuresApi,
} from "../../types";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
} from "../../store/features/ui/uiSlice/uiSlice";

interface UseStrucutres {
  getStructures: () => Promise<void>;
  deleteStructure: (id: string) => void;
}

const useStructures = (): UseStrucutres => {
  const dispatch = useAppDispatch();
  const {
    user: { token },
  } = useAppSelector((store) => store);

  const getStructures = useCallback(async () => {
    dispatch(turnOnLoaderActionCreator());
    const structuresPath = "/structures";
    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API!}${structuresPath}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const { structures }: StructuresApi = await response.json();
      dispatch(turnOffLoaderActionCreator());

      dispatch(loadStructuresActionCreator(structures));
    } catch (error) {
      dispatch(turnOffLoaderActionCreator());
      modal("Ups, something went wrong", "error");
    }
  }, [dispatch]);

  const deleteStructure = async (id: string) => {
    const structuresPath = "/structures";

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API!}${structuresPath}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
        }
      );

      const apiStructures: ApiStructures = await response.json();

      if (!response.ok) {
        throw new Error((apiStructures as ErrorResponse).error);
      }

      dispatch(deletedStructureActionCreator(id));
      modal(`Deleted ${(apiStructures as DeletedResponse).deleted}`);
    } catch (error) {
      modal("Ups, something went wrong", "error");
    }
  };

  return {
    getStructures,
    deleteStructure,
  };
};

export default useStructures;
