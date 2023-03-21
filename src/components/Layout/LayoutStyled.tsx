import styled from "styled-components";

const LayoutStyled = styled.div`
  display: block;

  min-height: 100vh;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${(props) => props.theme.padding.mainMobilePadding};
    background-color: ${(props) => props.theme.colour.main};

    &__logo {
      filter: brightness(0) invert(1);
    }
  }

  .navbar {
    position: absolute;
    top: 71px;
    left: 0;
    width: 100%;
  }

  .Toastify__close-button > svg {
    min-width: 42px;
    min-height: 42px;
  }

  .content {
    margin-top: 115px;

    padding: ${(props) => props.theme.padding.mainMobilePadding};
  }
  .not-found {
  }
`;

export default LayoutStyled;
