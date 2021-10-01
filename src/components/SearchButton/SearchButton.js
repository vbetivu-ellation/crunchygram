import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import { SearchSvg } from "../common";
import PostsContext from "../../contexts/PostsContext";

import styles from "./SearchButton.module.css";

const SearchButton = ({ isDisabled }) => {
  const { fetchPosts, setData } = useContext(PostsContext);

  const onClick = useCallback(() => {
    setData([]);

    return fetchPosts().then(setData);
  }, [fetchPosts, setData]);

  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      <SearchSvg className={styles.searchIcon} />
    </button>
  );
};

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default SearchButton;
