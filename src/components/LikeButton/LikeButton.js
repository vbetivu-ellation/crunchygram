import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./LikeButton.module.css";
import { LikeFilledSvg, LikeSvg, Text } from "../common";

const LikeButton = ({ onClick, isLiked, className, count }) => {
  const Icon = isLiked ? LikeFilledSvg : LikeSvg;

  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      <Icon className={classNames(styles.icon, { [styles.liked]: isLiked })} />
      {count ? (
        <Text as="p" size="m">
          {count}
        </Text>
      ) : null}
    </button>
  );
};

LikeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLiked: PropTypes.bool,
  className: PropTypes.string,
  count: PropTypes.number,
};

export default LikeButton;
