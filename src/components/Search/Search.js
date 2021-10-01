import React, { useCallback, useContext } from "react";

import { Input } from "../common";
import SearchButton from "../SearchButton";

import styles from "./Search.module.css";
import PostsContext from "../../contexts/PostsContext";

const Search = () => {
  const {fetchPosts, setData, search, setSearch} = useContext(PostsContext);
  const handleChange = useCallback(
    ({target: {value}}) => setSearch(value),
    [setSearch],
  );
  const onSearchClick = useCallback(
    () => fetchPosts().then(setData),
    [fetchPosts, setData],
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
      <SearchButton isDisabled={search.length < 4} onClick={onSearchClick} />
    </div>
  );
};

export default Search;
