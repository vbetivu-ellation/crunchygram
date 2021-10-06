import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SearchSvg } from "../common";
import styles from "./SearchButton.module.css";
import useAction from "../../hooks/useAction";
import { fetchPostsAction } from "../../store/actions/homePage/posts";

const SearchButton = ({ isDisabled, className }) => {
  const fetchFirstPage = useAction(fetchPostsAction);

  return (
    <button
      className={classNames(styles.button, className)}
      disabled={isDisabled}
      onClick={fetchFirstPage}
    >
      <SearchSvg className={styles.searchIcon} />
    </button>
  );
};

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default SearchButton;
