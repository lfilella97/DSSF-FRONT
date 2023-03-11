import styled from "styled-components";

const LoadingPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    position: relative;
    width: 48px;
    height: 48px;
    background: ${(props) => props.theme.colour.main};
    transform: rotateX(65deg) rotate(45deg);
    // remove bellows command for perspective change
    transform: perspective(200px) rotateX(65deg) rotate(45deg);
    color: ${(props) => props.theme.colour.secondary};
    animation: layers1 1s linear infinite alternate;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(220, 220, 220, 0.8);
    animation: layerTr 1s linear infinite alternate;
  }

  @keyframes layers1 {
    0% {
      box-shadow: 0px 0px 0 0px;
    }
    90%,
    100% {
      box-shadow: 20px 20px 0 -4px;
    }
  }
  @keyframes layerTr {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(-25px, -25px) scale(1);
    }
  }
`;

export default LoadingPageStyled;
