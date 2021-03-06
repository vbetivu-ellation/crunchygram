import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";
import classNames from "classnames";

const Button = ({ children, className, type, isDisabled, onClick }) => (
  <button
    className={classNames(
      styles.button,
      styles[isDisabled ? "outlined" : type],
      className
    )}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["filled", "outlined"]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
