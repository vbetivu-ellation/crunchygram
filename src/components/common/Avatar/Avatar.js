import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Avatar.module.css";

const Avatar = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={classNames(className, styles.avatar)} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Avatar;
