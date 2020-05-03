import React from "react";
import { node, func, bool } from "prop-types";

import { ButtonStyled } from "./Button.styled";

const Button = ({ children, onClick, isIcon }) => (
  <ButtonStyled onClick={onClick} icon={isIcon} role="button">{children}</ButtonStyled>
);

Button.propTypes = {
  children: node.isRequired,
  onClick: func,
  isIcon: bool,
};

Button.defaultProps = {
  onClick: () => {},
  isIcon: false,
};

export default Button;
