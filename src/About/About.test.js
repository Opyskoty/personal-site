import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import About from "./index";
import Navbar from "../Routes-nav/Navbar";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
});

it("handles showing contact modal", async function () {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar>
        <About />
      </Navbar>
    </MemoryRouter>
  );

  fireEvent.click(getByText("contact"));
  expect(getByText("Resume")).toBeInTheDocument();
});

//snapshot
it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
