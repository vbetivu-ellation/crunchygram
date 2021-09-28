import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "./Image.module.css";

const Image = ({ alt, src, className }) => {

  return (
      <img
        className={classNames(styles.image, className)}
        src={src}
        alt={alt}
      />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
