import StoreProvider from "./store";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/post/:id" exact>
          id
        </Route>
        <Route path="/profile/:username" exact>
          Profile
        </Route>
        <Route path="/login" exact>
          Login
        </Route>
        <Route path="*" exact>
          Page not found
        </Route>
      </Switch>
    </Router>
  </StoreProvider>
);

export default App;
