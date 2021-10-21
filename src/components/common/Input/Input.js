import propTypes from "prop-types";
import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

function Input({ value, placeholder, isDisabled, handleChange, className }) {
  return (
    <input
      className={classNames(styles.Inputstyle, className)}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={isDisabled}
    />
  );
}

Input.propTypes = {
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  isDisabled: propTypes.bool,
  handleChange: propTypes.func.isRequired,
  className: propTypes.string,
};
export default Input;
