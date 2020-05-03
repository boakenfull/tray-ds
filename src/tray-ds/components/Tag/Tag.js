import React from "react";
import { string, bool } from "prop-types";

import { TagStyled } from "./Tag.styled";

const Tag = ({ children, isSecondary }) => (
  <TagStyled isSecondary={isSecondary}>{children}</TagStyled>
);

Tag.propTypes = {
  children: string.isRequired,
  isSecondary: bool,
};

Tag.defaultProps = {
  isSecondary: false
};

export default Tag;