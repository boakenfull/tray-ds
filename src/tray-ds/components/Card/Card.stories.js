import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { text, boolean } from "@storybook/addon-knobs";

import Card from ".";

export default { title: "Card" };

export const CardExample = () => (
  <Card
    title={text("Title", "Yellow submarine")}
    icon={<FaGlobeAmericas />}
    tagText={text("Tag Text", "Personal")}
    tagSecondary={boolean("Secondary Tag", false)}
    largeIcon={boolean("Large Icon", false)}
    meta={text("Meta Text", "Created by me")}
  />
);
