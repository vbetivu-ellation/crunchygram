import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.module.css";

const Avatar = ({ src, alt }) => (
  <img src={src} alt={alt} className={styles.avatar} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
