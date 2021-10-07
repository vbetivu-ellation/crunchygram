import logo from "./logo.svg";
import styles from "./App.module.css";
import { Text } from "./components/common";
import StoreProvider from "./store";
import Counter from "./components/Counter";
import LikeSvg from "./components/like_svg";

function App() {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Counter />
          <Text as="p" size="xl" weight="bold">
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <LikeSvg />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
