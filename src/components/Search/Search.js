import React, { useState, useCallback } from "react";

import SearchButton from "../SearchButton";

import styles from "./Search.module.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const handleChange = useCallback(
    ({ target: { value } }) => setQuery(value),
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={query}
          onChange={handleChange}
          placeholder="Search for a title..."
        />
      </div>
      <SearchButton isDisabled={query.length < 4} />
    </div>
  );
};

export default Search;
