import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStructures from "../../hooks/useStructures/useStructures";
import Detail from "../../components/Detail/Detail";
import { useAppSelector } from "../../store/hooks";

const DetailPage = (): JSX.Element => {
  const {
    structure: { structure },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  const { getStructure } = useStructures();

  const { id } = useParams();

  useEffect(() => {
    getStructure(id!);
  }, [getStructure, id]);

  return <>{!isLoading && <Detail structure={structure} />}</>;
};

export default DetailPage;
