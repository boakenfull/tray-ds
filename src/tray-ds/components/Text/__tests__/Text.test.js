import React from "react";
import { render } from "@testing-library/react";

import Text from "../";

test("should render the text component", () => {
  const { container } = render(<Text>Text</Text>);
  expect(container).toMatchSnapshot();
})
