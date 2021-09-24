import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Text.module.css";

const Text = ({ children, className, size, weight }) => {
  return (
    <p
      className={classNames(
        styles.text,
        styles[weight],
        styles[size],
        className
      )}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(["semibold", "bold"]),
};

export default Text;
