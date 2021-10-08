import logo from "./logo.svg";
import styles from "./App.module.css";
import { Text } from "./components/common";
import StoreProvider from "./store";
import Counter from "./components/Counter";
import { HeadingL } from "./components/HeadingL/HeadingL.jsx"
import { HeadingXL } from './components/HeadingXL/HeadingXL.jsx'


function App() {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <header className={styles.header}>

          <HeadingL
            bgColor={'blue'}
            title="Title example 0001 Heading L"
            content="Text example"
            lineColor="red"
          />

          <HeadingXL
            bgColor={'orange'}
            title="Title example 0001 Heading XL"
            content="Text example"
            lineColor="green"
          />

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
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
