import { createGlobalStyle } from "styled-components";
import "tachyons/css/tachyons.min.css";
// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Lato:100,400|Open+Sans'); */
  body {
    /* font-family: 'Lato', sans-serif; */
    /* font-family: 'Open Sans', sans-serif; */
    margin: 0;
    font-size: 16px;
  }
`;

export default GlobalStyle;
