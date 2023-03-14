import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <div aria-label="This page is loading..." className="loader"></div>
    </LoadingStyled>
  );
};

export default Loading;
