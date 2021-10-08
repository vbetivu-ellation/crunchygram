import React, { useState } from 'react';
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Text , Input} from "./components/common";



function App() {
  const [value, setValue] = useState("");
   const handleChange=(event)=>
    setValue(event.target.value);
  
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
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
      <Input value={value} handleChange={handleChange}/>


    </div>
  );
}

export default App;
