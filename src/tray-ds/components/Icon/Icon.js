import React from "react";
import { node } from "prop-types";

import { StyledIcon } from "./Icon.styled";

const Icon = ({ icon }) => (
  <StyledIcon>{icon}</StyledIcon>
);

Icon.propTypes = {
  icon: node.isRequired,
};

export default Icon;
