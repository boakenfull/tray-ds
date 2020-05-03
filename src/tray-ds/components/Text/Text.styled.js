import styled from "styled-components";

import { waterloo, violet } from "../../styles/colourPalette";
import { xsmallFontSize, smallFontSize, defaultFontSize } from "../../styles/variables";

export const TextStyled = styled.p`
  font-weight: normal;
  margin: 0;
  color: ${(props) => (props.isSecondary ? waterloo : violet)};
  ${(props) => props.size === "xsmall" && `font-size: ${xsmallFontSize};`}
  ${(props) => props.size === "small" && `font-size: ${smallFontSize};`}
  ${(props) => props.size === "default" && `font-size: ${defaultFontSize};`}
`;
