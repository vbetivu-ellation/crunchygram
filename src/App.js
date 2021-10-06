import styles from "./App.module.css";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <div className={styles.app}></div>
    </StoreProvider>
  );
}

export default App;
