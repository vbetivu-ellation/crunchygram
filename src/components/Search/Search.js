import React, { useCallback, useContext } from "react";

import { Input } from "../common";
import SearchButton from "../SearchButton";

import styles from "./Search.module.css";
import PostsContext from "../../contexts/PostsContext";

const Search = () => {
  const {search, setSearch} = useContext(PostsContext);
  const handleChange = useCallback(
    ({target: {value}}) => setSearch(value),
    [setSearch],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Input
          value={search}
          onChange={handleChange}
          label="Search"
          placeholder="Type here..."
        />
      </div>
      <SearchButton isDisabled={search.length < 4} />
    </div>
  );
};

export default Search;
