import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

**,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --main-color: #132A13;
  --secondary-color: #fff;
  
  --main-text-color: #132A13;
  --secondary-text-color:  #1D1D1D;

  --main-detail-color: #1d1d1d;
  --secodary-detail-color: #e8e8e8
}

ul,
li {
  list-style: none;
  padding-inline-start: 0px;
  padding-left: 0;
  margin: 0;
}

body {
  background-color: var(--secondary-color);
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Roboto", "Basier circle", Geneva, Tahoma, sans-serif; 
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}


h2 {
  margin: 0;
  font-weight: inherit;
}


button, input  {
  font-family: inherit;
}

button {
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: none
}

`;

export default GlobalStyles;
