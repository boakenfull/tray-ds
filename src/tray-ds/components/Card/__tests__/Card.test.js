import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { render } from "@testing-library/react";

import Card from "..";

test("should render the card component", () => {
  const { container } = render(
    <Card
      title="Yellow submarine"
      icon={<FaGlobeAmericas />}
      tagText="Personal"
      tagSecondary
      meta="Created by me"
    />,
  );

  expect(container).toMatchSnapshot();
});

test("should render correctly when the largeIcon prop is passed", () => {
  const { container } = render(
    <Card
      title="Yellow submarine"
      icon={<FaGlobeAmericas />}
      tagText="Personal"
      tagSecondary
      meta="Created by me"
      largeIcon
    />,
  );

  expect(container).toMatchSnapshot();
});
