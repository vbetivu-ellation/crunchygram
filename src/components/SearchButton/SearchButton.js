import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import styles from "./SearchButton.module.css";
import { Button, SearchSvg } from "../common";
import PostsContext from "../../contexts/PostsContext";

const SearchButton = ({isDisabled}) => {
  const {fetchPosts, setData} = useContext(PostsContext);

  const onClick = useCallback(
    () => {
      setData([]);

      return fetchPosts().then(setData);
    },
    [fetchPosts, setData],
  );

  return (
    <Button
      className={styles.button}
      type="filled"
      isDisabled={isDisabled}
      onClick={onClick}
    >
      <SearchSvg className={styles.searchIcon} />
      Search
    </Button>
  );
};

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default SearchButton;
