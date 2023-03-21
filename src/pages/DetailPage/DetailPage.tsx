import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useStructures from "../../hooks/useStructures/useStructures";
import Detail from "../../components/Detail/Detail";
import { useAppSelector } from "../../store/hooks";

const DetailPage = (): JSX.Element => {
  const { structures } = useAppSelector((state) => state);

  const { getStructure } = useStructures();

  const { id } = useParams();

  useEffect(() => {
    getStructure(id!);
  }, [getStructure, id]);

  return (
    <>
      {structures[0] && <Detail structure={structures[0]} />}
      {!structures[0] && <Navigate to={"/home"} />}
    </>
  );
};

export default DetailPage;
