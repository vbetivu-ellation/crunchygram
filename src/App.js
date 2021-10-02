import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";
import PostPage from "./components/PostPage";

import styles from "./App.module.css";
import HomePage from "./components/HomePage";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Nav />
        <div className={styles.content}>
          <Switch>
            <Route path="/profile/:id" exact>
              <ProfilePage />
            </Route>
            <Route path="/post/:id" exact>
              <PostPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
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

export default App;
