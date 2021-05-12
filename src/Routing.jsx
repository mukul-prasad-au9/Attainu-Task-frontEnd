import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
const Routing = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </>
  );
};
export default Routing;
