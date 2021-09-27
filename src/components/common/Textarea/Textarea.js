import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Textarea.module.css";

const Textarea = ({ value, onChange, placeholder, className, isDisabled }) => (
  <textarea
    className={classNames(styles.textarea, className)}
    value={value}
    placeholder={placeholder}
    disabled={isDisabled}
    onChange={onChange}
  />
);

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Textarea;
