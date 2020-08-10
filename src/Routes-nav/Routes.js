import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../Homepage";
import About from "../About";
import Navbar from "./Navbar";
import Georgie from "../Georgie";

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
      <Route exact path="/georgie">
        <Georgie />
      </Route>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default Routes;
