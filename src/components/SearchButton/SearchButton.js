import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchButton.module.css";
import { SearchSvg } from "../common";

const SearchButton = ({ isDisabled, onClick }) => {
  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      <SearchSvg className={styles.searchIcon} />
    </button>
  );
};

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
