import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Heading.module.css";

const Heading = ({ as: As, children, className, size, weight }) => (
  <As
    className={classNames(
      styles.heading,
      styles[weight],
      styles[size],
      className
    )}
  >
    {children}
  </As>
);

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl"]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(["semibold", "bold"]),
};

export default Heading;
