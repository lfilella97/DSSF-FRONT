import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deletedStructureActionCreator,
  loadMoreStructuresActionCreator,
  loadStructuresActionCreator,
} from "../../store/features/structures/structuresSlice/structuresSlice";
import {
  turnOffLoaderActionCreator,
  turnOnLoaderActionCreator,
  turnOnModalActionCreator,
} from "../../store/features/ui/uiSlice/uiSlice";
import {
  ApiStructures,
  CreatedResponse,
  DeletedResponse,
  ErrorResponse,
  StructureState,
  StructuresState,
} from "../../types";
import { loadStructureActionCreator } from "../../store/features/structures/structureSlice/structureSlice";

interface UseStrucutres {
  getStructures: (params: URLSearchParams, more?: boolean) => Promise<void>;
  deleteStructure: (id: string) => Promise<void>;
  createStructure: (structure: FormData) => Promise<void>;
  getStructure: (id: string) => Promise<void>;
}

const useStructures = (): UseStrucutres => {
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();
  const {
    user: { token },
  } = useAppSelector((store) => store);

  const getStructures = useCallback(
    async (params: URLSearchParams, loadMore = false) => {
      dispatch(turnOnLoaderActionCreator());

      const structuresPath = "/structures";

      try {
        const response: Response = await fetch(
          `${process.env.REACT_APP_URL_API!}${structuresPath}?${params}`
        );

        if (!response.ok) {
          throw new Error();
        }

        const structuresState: StructuresState = await response.json();

        dispatch(turnOffLoaderActionCreator());
        dispatch(
          (loadMore
            ? loadMoreStructuresActionCreator
            : loadStructuresActionCreator)(structuresState)
        );
      } catch (error) {
        dispatch(turnOffLoaderActionCreator());
        dispatch(
          turnOnModalActionCreator({
            message: "Ups, something went wrong",
            error: true,
          })
        );
      }
    },
    [dispatch]
  );

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

      dispatch(
        turnOnModalActionCreator({
          message: `Deleted ${(apiStructures as DeletedResponse).deleted}`,
          error: false,
        })
      );
    } catch (error) {
      dispatch(
        turnOnModalActionCreator({
          message: "Ups, something went wrong",
          error: true,
        })
      );
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

      dispatch(
        turnOnModalActionCreator({
          message: (apiStructures as CreatedResponse).message,
          error: false,
        })
      );

      dispatch(turnOffLoaderActionCreator());

      navigateTo("/home");
    } catch (error) {
      dispatch(
        turnOnModalActionCreator({
          message: (error as ErrorResponse).error,
          error: true,
        })
      );

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
        dispatch(loadStructureActionCreator(apiStructures as StructureState));
        dispatch(turnOffLoaderActionCreator());
      } catch (error: unknown) {
        dispatch(
          turnOnModalActionCreator({
            message: (error as Error).message,
            error: true,
          })
        );
        dispatch(turnOffLoaderActionCreator());
        navigateTo("/home");
      }
    },
    [dispatch, navigateTo]
  );

  return {
    getStructures,
    deleteStructure,
    createStructure,
    getStructure,
  };
};

export default useStructures;
