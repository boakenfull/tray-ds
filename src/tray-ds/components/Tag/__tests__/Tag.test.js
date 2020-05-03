import React from "react";
import { render } from "@testing-library/react";

import Tag from "..";

test("should render the tag component", () => {
  const { container } = render(<Tag>Text</Tag>);
  expect(container).toMatchSnapshot();
});

test("should render the secondary tag component", () => {
  const { container } = render(<Tag isSecondary>Text</Tag>);
  expect(container).toMatchSnapshot();
});
