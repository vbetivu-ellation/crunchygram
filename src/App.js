import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import styles from "./App.module.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className={styles.content}>
        <Switch>
          <Route path="/profile/:id" exact>
            Profile
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
