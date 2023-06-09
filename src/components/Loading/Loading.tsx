import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <span aria-label="This page is loading..." className="loader"></span>
    </LoadingStyled>
  );
};

export default Loading;
