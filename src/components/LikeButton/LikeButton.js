import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./LikeButton.module.css";
import { LikeFilledSvg, LikeSvg } from "../common";

const LikeButton = ({ onClick, isLiked, className }) => {
  const Icon = isLiked ? LikeFilledSvg : LikeSvg;

  return (
    <button
      className={classNames(
        styles.button,
        { [styles.liked]: isLiked },
        className
      )}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

LikeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLiked: PropTypes.bool,
  className: PropTypes.string,
};

export default LikeButton;
