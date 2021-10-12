import React from "react";
import styles from "./Heading.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Heading = ({ as: As, children, size, className, weight }) => {
  return (
    <As
      className={classNames(
        styles.heading,
        styles[size],
        styles[weight],
        className
      )}
    >
      {children}
    </As>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(["semibold", "bold"]),
};
export default Heading;
