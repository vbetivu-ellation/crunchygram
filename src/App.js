import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "./store";
import ProfileHeader from "./components/ProfileHeader";

const App = () => (
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          Home
          <ProfileHeader username = "Mihaela" avatar = "https://static.crunchyroll.com/assets/avatar/170x170/1037-tokyo-revengers-mikey.png"
          likescount={3} commentscount={3} ></ProfileHeader>
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
