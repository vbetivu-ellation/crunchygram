import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Logo.module.css";

const Logo = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={classNames(styles.logo, className)}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <path d="M19.125 13.914a3.804 3.804 0 0 1-1.292-7.385 8.357 8.357 0 0 0-12.243 7.4 8.357 8.357 0 0 0 8.357 8.357 8.357 8.357 0 0 0 8.217-9.888 3.8 3.8 0 0 1-3.04 1.516M11.893 0C5.325 0 0 5.325 0 11.892c0 6.569 5.325 11.893 11.892 11.893.273 0 .542-.01.809-.027-5.476-.33-9.817-4.873-9.817-10.433 0-5.773 4.68-10.453 10.454-10.453 5.527 0 10.051 4.29 10.427 9.72.013-.231.02-.464.02-.7C23.785 5.325 18.461 0 11.892 0" />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;