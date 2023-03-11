import LoadingPageStyled from "./LoadingPageStyled";

const LoadingPage = (): JSX.Element => {
  return (
    <LoadingPageStyled>
      <span aria-label="This page is loading..." className="loader"></span>
    </LoadingPageStyled>
  );
};

export default LoadingPage;
