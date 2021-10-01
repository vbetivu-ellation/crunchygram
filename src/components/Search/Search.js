import React, { useCallback, useContext } from "react";

import SearchButton from "../SearchButton";

import styles from "./Search.module.css";
import PostsContext from "../../contexts/PostsContext";

const Search = () => {
  const { fetchPosts, setData, search, setSearch } = useContext(PostsContext);
  const handleChange = useCallback(
    ({ target: { value } }) => setSearch(value),
    [setSearch]
  );
  const onSearchClick = useCallback(
    () => fetchPosts().then(setData),
    [fetchPosts, setData]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={search}
          onChange={handleChange}
          placeholder="Search for a title..."
        />
      </div>
      <SearchButton isDisabled={search.length < 4} onClick={onSearchClick} />
    </div>
  );
};

export default Search;
