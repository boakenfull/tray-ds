import React from "react";
import { text } from "@storybook/addon-knobs"

import Tag from "./";

export default { title: "Tag" };

export const Primary = () => <Tag>{text("Text", "Tag Primary")}</Tag>;
export const Secondary = () => <Tag isSecondary>{text("Text", "Tag Secondary")}</Tag>;
