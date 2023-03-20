import { useParams } from "react-router-dom";
import useStructures from "../../hooks/useStructures/useStructures";
import { useAppSelector } from "../../store/hooks";
import Detail from "../../components/Detail/Detail";
import { useEffect } from "react";

const DetailPage = (): JSX.Element => {
  const { structures } = useAppSelector((state) => state);

  const { getStructure } = useStructures();

  const { id } = useParams();

  useEffect(() => {
    getStructure(id!);
  }, [getStructure, id]);

  return <Detail structure={structures[0]} />;
};

export default DetailPage;
