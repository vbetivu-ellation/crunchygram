import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { SendSvg } from "../Svg";

import styles from "./Textarea.module.css";

const Textarea = ({
  onSubmit,
  value,
  onChange,
  placeholder,
  className,
  isDisabled,
}) => (
  <div className={classNames(styles.wrapper, className)}>
    <textarea
      className={styles.textarea}
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
    />
    <button
      disabled={value.length === 0}
      className={styles.button}
      onClick={onSubmit}
    >
      <SendSvg />
    </button>
  </div>
);

Textarea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Textarea;
