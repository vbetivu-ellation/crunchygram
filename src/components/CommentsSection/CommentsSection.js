import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Textarea } from "../common";
import Comment from "../Comment";

import styles from "./CommentsSection.module.css";

const CommentsSection = ({ className }) => {
  const [newCommentValue, setNewCommentValue] = useState("");
  const handleCommentValueChange = useCallback(
    ({ target: { value } }) => setNewCommentValue(value),
    []
  );

  return (
    <div className={classNames(styles.wrapper, className)}>
      <ul className={styles.list}>
        {new Array(24).fill().map((_, index) => (
          <li key={index}>
            <Comment />
          </li>
        ))}
      </ul>
      <div className={styles.textarea}>
        <Textarea
          value={newCommentValue}
          onChange={handleCommentValueChange}
          placeholder="Comment here..."
        />
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  className: PropTypes.string,
};

export default CommentsSection;
