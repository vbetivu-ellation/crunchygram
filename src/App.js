import logo from "./logo.svg";
import styles from "./App.module.css";

import StoreProvider from "./store";
import Counter from "./components/Counter";
import Searchbutton from "./components/Searchbutton";

function App() {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Counter />
          <p as="p" size="xl" weight="bold">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Searchbutton />
      </div>
    </StoreProvider>
  );
}

export default App;
