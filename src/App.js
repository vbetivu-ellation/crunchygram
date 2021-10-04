import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";
import PostPage from "./components/PostPage";

import styles from "./App.module.css";
import HomePage from "./components/HomePage";
import StoreProvider from "./store";
import Login from "./components/Login/Login";

function App({ user }) {
  return (
    <StoreProvider user={user}>
      <BrowserRouter>
        <Nav />
        <div className={styles.content}>
          <Switch>
            <Route path="/profile/:username" exact>
              <ProfilePage />
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/login" exact>
              <Login />
              {!!user && <Redirect to="/" />}
            </Route>
            <Route path="/post/:id" exact>
              <PostPage />
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/" exact>
              <HomePage />
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

App.propTypes = {
  user: PropTypes.object,
};

export default App;
