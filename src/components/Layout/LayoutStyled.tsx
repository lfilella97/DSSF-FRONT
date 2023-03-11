import styled from "styled-components";

const LayoutStyled = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  .header {
    padding: ${(props) => props.theme.padding.mainMobilePadding};
    background-color: ${(props) => props.theme.colour.main};
    max-height: 100px;
  }
  .logo {
    max-height: 100px;
    fill: ${(props) => props.theme.colour.white};
  }
`;

export default LayoutStyled;
