import { createGlobalStyle } from 'styled-components';

const NunitoSans300 = require("../fonts/nunito-sans-300.woff");
const NunitoSans600 = require("../fonts/nunito-sans-600.woff");

export default createGlobalStyle`
  @font-face {
    font-family: "nunito-sans";
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${NunitoSans300}) format("woff");
  }

  @font-face {
    font-family: "nunito-sans";
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${NunitoSans600}) format("woff");
  }

  body {
    font-family: "nunito-sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
`;