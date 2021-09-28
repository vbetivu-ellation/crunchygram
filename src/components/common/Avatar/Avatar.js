import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Image from '../Image';

import styles from "./Avatar.module.css";

const Avatar = ({ alt, src, className }) => {

  return (
      <Image
        src={src}
        className={classnames(styles.avatar, className)}
        alt={alt}
      />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Avatar;
