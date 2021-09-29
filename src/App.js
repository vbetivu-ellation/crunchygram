import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
        <Route path="*">Not found</Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
