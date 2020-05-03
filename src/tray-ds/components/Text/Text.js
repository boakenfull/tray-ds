import React from "react";
import { string, oneOf, bool } from "prop-types";

import { TextStyled } from "./Text.styled";

const Text = ({ children, size, isSecondary }) => (
  <TextStyled size={size} isSecondary={isSecondary}>{children}</TextStyled>
);

Text.propTypes = {
  children: string.isRequired,
  size: oneOf(["small", "medium", "large"]),
  isSecondary: bool,
};

Text.defaultProps = {
  size: "medium",
  isSecondary: false
};

export default Text;