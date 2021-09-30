import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { CommentSvg } from "../common";
import styles from "./CommentsButton.module.css";

const CommentsButton = ({ onClick, className }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    <CommentSvg />
  </button>
);

CommentsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CommentsButton;
