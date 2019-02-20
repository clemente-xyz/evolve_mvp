import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "../components";
import { Home, Signup } from "../pages";

export default () => (
  <>
    <Navbar logo="logo" brand="evolve" links={[{path: 'sdklfj', label: "link 1"}, {path: 'sddddklfj', label: "link 1"}, {path: 'sdsdfsfklfj', label: "link 1"}]}/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>
);
