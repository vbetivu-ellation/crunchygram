import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "./store";
import Footer from "./components/Footer";
import Search from "./components/Search"

const App = () => (
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          Home
          <Search/>
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
    <Footer/>
  </StoreProvider>
);

export default App;
