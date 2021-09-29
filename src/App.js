import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className={styles.content}>
        <Switch>
          <Route path="/profile/:id" exact>
            <ProfilePage />
          </Route>
          <Route path="/post/:id" exact>
            Post
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
