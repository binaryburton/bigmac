import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders h1 element with text", () => {
  const { getByText } = render(<App />);
  const text = getByText(/GRANDE MAC/i);
  expect(text).toBeInTheDocument();
});
