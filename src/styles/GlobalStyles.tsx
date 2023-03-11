import "../../node_modules/@fontsource/roboto/400.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}



ul,
li {
  list-style: none;
  padding-inline-start: 0px;
  padding-left: 0;
  margin: 0;
}

body {
  margin: 0;
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
  margin-block-start: 0;
  margin-block-end: 0;
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
