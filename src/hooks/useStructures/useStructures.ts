import { useCallback } from "react";
import {
  deletedStructureActionCreator,
  loadStructuresActionCreator,
} from "../../store/features/structures/structureSlice/structuresSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ApiStructures,
  CreatedResponse,
  DeletedResponse,
  ErrorResponse,
  StructureApi,
  StructuresApi,
} from "../../types";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
} from "../../store/features/ui/uiSlice/uiSlice";
import modal from "../../modals/modals";
import { useNavigate } from "react-router-dom";

interface UseStrucutres {
  getStructures: () => Promise<void>;
  deleteStructure: (id: string) => void;
  createStructure: (structure: FormData) => Promise<void>;
  getStructure: (id: string) => void;
}

const useStructures = (): UseStrucutres => {
  const navigateTo = useNavigate();
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

  const createStructure = async (formData: FormData) => {
    const structuresCreatePath = "/structures/create";

    try {
      dispatch(turnOnLoaderActionCreator());

      const response: Response = await fetch(
        `${process.env.REACT_APP_URL_API!}${structuresCreatePath}`,

        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token} `,
          },
          body: formData,
        }
      );

      const apiStructures: ApiStructures = await response.json();

      if (!response.ok) {
        throw new Error((apiStructures as ErrorResponse).error);
      }

      modal((apiStructures as CreatedResponse).message);

      dispatch(turnOffLoaderActionCreator());

      navigateTo("/home");
    } catch (error) {
      modal("Ups, something went wrong", "error");

      dispatch(turnOffLoaderActionCreator());
    }
  };

  const getStructure = useCallback(
    async (id: string) => {
      const structuresPath = "/structures";
      dispatch(turnOnLoaderActionCreator());
      try {
        const response: Response = await fetch(
          `${process.env.REACT_APP_URL_API!}${structuresPath}/${id}`
        );

        const apiStructures: ApiStructures = await response.json();

        if (!response.ok) {
          throw new Error((apiStructures as ErrorResponse).error);
        }

        dispatch(
          loadStructuresActionCreator([
            (apiStructures as StructureApi).structure,
          ])
        );
        dispatch(turnOffLoaderActionCreator());
      } catch (error) {
        modal("Ups, something went wrong", "error");
      }
    },
    [dispatch]
  );

  return {
    getStructures,
    deleteStructure,
    createStructure,
    getStructure,
  };
};

export default useStructures;
