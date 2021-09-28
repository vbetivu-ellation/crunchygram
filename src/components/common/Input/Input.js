import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Input.module.css";
import Text from "../Text";

const Input = ({
  className,
  onChange,
  value,
  isDisabled,
  label,
  placeholder,
}) => (
  <label className={styles.label}>
    <Text as="small" size="s" className={styles.labelText}>
      {label}
    </Text>
    <input
      placeholder={placeholder}
      value={value}
      className={classNames(styles.input, className)}
      disabled={isDisabled}
      onChange={onChange}
    />
  </label>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Input;
