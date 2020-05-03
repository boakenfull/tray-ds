import React from "react";
import { text, select } from "@storybook/addon-knobs";

import Text from ".";

const sizeOptions = {
  xSmall: "xsmall",
  Small: "small",
  Default: "default",
};

export default { title: "Text" };

export const Default = () => <Text size={select("Size", sizeOptions, "default")}>{text("Text", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")}</Text>;
