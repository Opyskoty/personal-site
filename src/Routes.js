import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
