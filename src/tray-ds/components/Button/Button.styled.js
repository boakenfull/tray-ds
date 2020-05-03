import styled, { css } from "styled-components";
import { lighten } from "polished";

import { blueRibbon, white, comet } from "../../styles/colourPalette";
import { smallFontSize } from "../../styles/variables";

import { StyledIcon } from "../Icon/Icon.styled";

export const ButtonStyled = styled.button`
  font-family: "nunito-sans", sans-serif;
  font-weight: 600;
  background-color: ${blueRibbon};
  color: ${white};
  line-height: 40px;
  border-radius: 4px;
  font-size: ${smallFontSize};
  padding: 0 16px;
  outline: 0;

  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.1, blueRibbon)};
  }

  &:active {
    background-color: ${lighten(0.15, blueRibbon)};
  }

  ${(props) => props.icon && css`
    border: 0;
    background-color: transparent;
    text-align: center;

    ${StyledIcon} {
      color: ${comet};
      display: unset;
    }

    &:hover {
      background-color: transparent;
    }
  `};
`;
