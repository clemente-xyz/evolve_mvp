import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "../components";
import { Home, Signup, Signin } from "../pages/public";
import { Payments, Receipients, Settings, Wallet } from "../pages/auth";

export default ({ myData, refetch }) => (
  <>
    <Router>
      <>
        <Navbar myData={myData} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/signup" render={() => <Signup refetch={refetch} />} />
          <Route path="/signin" render={() => <Signin refetch={refetch} />} />
          <Route path="/payments" render={() => <Payments />} />
          <Route path="/receipients" render={() => <Receipients />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/wallet" render={() => <Wallet myData={myData} />} />

          {!myData ? <Redirect to="/" /> : <Redirect to="/wallet" />}
        </Switch>
      </>
    </Router>
  </>
);
