import React from "react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./";

export default { title: "Button" };

export const Primary = () => <Button onClick={action("click")}>{text("Button Text", "Button")}</Button>;
