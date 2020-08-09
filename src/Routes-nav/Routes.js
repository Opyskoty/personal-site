import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../Homepage";
import About from "../About";
import Navbar from "./Navbar";

function Routes() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <main>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default Routes;
