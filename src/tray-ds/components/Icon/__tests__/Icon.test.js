import React from "react";
import { render } from "@testing-library/react";
import { FaGlobeAmericas } from "react-icons/fa";
import Icon from "../Icon";

test("should render the component", () => {
  const { container } = render(<Icon icon={<FaGlobeAmericas />} />);
  expect(container).toMatchSnapshot();
});
