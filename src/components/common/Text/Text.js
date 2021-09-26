import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Text.module.css";

const Text = ({ as: As, children, className, size, weight }) => (
  <As
    className={classNames(styles.text, styles[weight], styles[size], className)}
  >
    {children}
  </As>
);

Text.propTypes = {
  as: PropTypes.oneOf(["p", "span", "small"]).isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(["semibold", "bold"]),
};

export default Text;
