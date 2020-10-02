import React from "react";
import ReactDOM from "react-dom";
import Loading from "./loading";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders withougt crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loading></Loading>, div);
});

it("renders loading screen correctly", () => {
  const { getByTestId } = render(<Loading></Loading>);
  expect(getByTestId("loading")).toBeInTheDocument();
});

it("matches snapshot", () => {
  const tree = renderer.create(<Loading></Loading>).toJSON();
  expect(tree).toMatchSnapshot();
});
