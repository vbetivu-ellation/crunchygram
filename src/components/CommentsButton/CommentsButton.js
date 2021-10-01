import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { CommentSvg, Text } from "../common";
import styles from "./CommentsButton.module.css";

const CommentsButton = ({ onClick, className, count }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    <CommentSvg className={styles.icon} />
    {count ? (
      <Text as="p" size="m">
        {count}
      </Text>
    ) : null}
  </button>
);

CommentsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  count: PropTypes.number,
};

export default CommentsButton;
