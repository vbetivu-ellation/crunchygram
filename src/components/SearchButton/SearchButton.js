import React from "react";
import PropTypes from "prop-types";

import { SearchSvg } from "../common";
import styles from "./SearchButton.module.css";
import useAction from "../../hooks/useAction";
import { fetchPostsAction } from "../../store/actions/homePage/posts";

const SearchButton = ({ isDisabled }) => {
  const fetchFirstPage = useAction(fetchPostsAction);

  return (
    <button
      className={styles.button}
      disabled={isDisabled}
      onClick={fetchFirstPage}
    >
      <SearchSvg className={styles.searchIcon} />
    </button>
  );
};

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default SearchButton;
