import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </HashRouter>
);
