import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Georgie from "./index";

it("renders without crashing", function () {
  render(<Georgie />);
});

it("displays the next picture when clicking on arrow", function () {
  const { getByText, getByAltText } = render(<Georgie />);

  const prevButton = getByText("Previous");
  const nextButton = getByText("Next");

  fireEvent.click(nextButton);

  expect(getByAltText("Georgie 2")).toBeInTheDocument();

  fireEvent.click(prevButton);

  expect(getByAltText("Georgie 7")).toBeInTheDocument();
});

//snapshot
it("matches snapshot", function () {
  const { asFragment } = render(<Georgie />);
  expect(asFragment()).toMatchSnapshot();
});
