import styled from "styled-components";

import { white, cornflowerBlue, frenchGray } from "../../styles/colourPalette";
import { xsmallFontSize } from "../../styles/variables";

export const TagStyled = styled.span`
  padding: 0 4px;
  font-size: ${xsmallFontSize};
  height: 16px;
  color: ${white};
  font-weight: 600;
  background-color: ${(props) => (props.isSecondary ? frenchGray : cornflowerBlue)};
  border-radius: 4px;
`;
