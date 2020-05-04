import styled from "styled-components";

import { spacingSmall, spacingDefault } from "../../styles/variables";
import { comet } from "../../styles/colourPalette";

import { StyledIcon } from "../Icon/Icon.styled";
import { TagStyled } from "../Tag/Tag.styled";

export const StyledCard = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  flex-direction: row;
  padding: ${spacingDefault};
`;

export const LargeIconWrapper = styled.div`
  display: flex;

  ${StyledIcon} {
    color: ${comet};
    font-size: 30px;
    margin-right: ${spacingDefault};
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: ${spacingSmall};

  ${StyledIcon} {
    color: ${comet};
    margin-right: ${spacingSmall};
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  align-items: center;

  ${TagStyled} {
    margin-right: ${spacingSmall};
  }
`;

export const StyledCardActions = styled.div`
  display: flex;
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
