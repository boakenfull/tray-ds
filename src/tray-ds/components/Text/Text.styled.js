import styled, { css } from "styled-components";

import { waterloo, violet } from "../../styles/colourPalette";
import { xsmallFontSize, smallFontSize, defaultFontSize } from "../../styles/variables";

export const TextStyled = styled.p`
  font-weight: normal;
  margin: 0;
  color: ${(props) => (props.isSecondary ? waterloo : violet)};
  ${(props) => props.size === "xsmall" && css`
    font-size: ${xsmallFontSize};
    font-weight: 300;
  `}
  ${(props) => props.size === "small" && `font-size: ${smallFontSize};`}
  ${(props) => props.size === "default" && css`
    font-size: ${defaultFontSize};
    font-weight: 600;
  `}
`;
