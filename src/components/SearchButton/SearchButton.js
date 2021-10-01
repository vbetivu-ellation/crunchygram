import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchButton.module.css";
import { Button, SearchSvg } from "../common";

const SearchButton = ({ isDisabled, onClick }) => {
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
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
