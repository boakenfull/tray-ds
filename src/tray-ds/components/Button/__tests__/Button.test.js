import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

const handleOnClick = jest.fn();

test("renders button component", () => {
  const { container } = render(<Button onClick={() => handleOnClick()}>Button</Button>);
  expect(container).toMatchSnapshot();
});

test("handles onClick correctly", () => {
  const { getByText } = render(<Button onClick={() => handleOnClick()}>Button</Button>);
  fireEvent.click(getByText("Button"));

  expect(handleOnClick).toHaveBeenCalled();
});
