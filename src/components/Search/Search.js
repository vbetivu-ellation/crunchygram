import React, { useCallback } from "react";

import SearchButton from "../SearchButton";

import styles from "./Search.module.css";
import useSelector from "../../hooks/useSelector";
import useAction from "../../hooks/useAction";
import { getSearchQuery } from "../../store/selectors/post";
import { setSearchQueryAction } from "../../store/actions/post";

const Search = () => {
  const searchQuery = useSelector(getSearchQuery());
  const setSearchQuery = useAction(setSearchQueryAction);
  const handleChange = useCallback(
    ({target: {value}}) => setSearchQuery(value),
    [setSearchQuery],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for a title..."
        />
      </div>
      <SearchButton isDisabled={searchQuery.length < 3} />
    </div>
  );
};

export default Search;
