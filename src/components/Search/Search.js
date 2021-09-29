import React, { useState, useCallback } from "react";

import { Input } from "../common";
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
        <Input
          value={query}
          onChange={handleChange}
          label="Search"
          placeholder="Type here..."
        />
      </div>
      <SearchButton isDisabled={query.length < 4} />
    </div>
  );
};

export default Search;
