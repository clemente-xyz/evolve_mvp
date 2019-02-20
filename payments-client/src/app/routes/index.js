import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "../components";
import { Home, Signup } from "../pages";
import { Logo } from "../assets";

const navRoutes = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "/signup",
    label: "Sign Up"
  },
  {
    path: "/signin",
    label: "Sign In"
  },
  {
    path: "/support",
    label: "Support"
  }
];

export default () => (
  <>
    <Router>
      <>
        <Navbar logo={<Logo />} brand="evolve" links={navRoutes} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  </>
);
