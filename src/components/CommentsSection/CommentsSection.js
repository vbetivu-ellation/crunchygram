import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Textarea } from "../common";
import Comment from "../Comment";

import styles from "./CommentsSection.module.css";

const CommentsSection = ({className, comments}) => {
  const [newCommentValue, setNewCommentValue] = useState("");
  const handleCommentValueChange = useCallback(
    ({ target: { value } }) => setNewCommentValue(value),
    []
  );

  return (
    <div className={classNames(styles.wrapper, className)}>
      <ul className={styles.list}>
        {comments.map(({username, avatar, text}, index) => (
          <li key={index}>
            <Comment
              comment={text}
              avatar={avatar}
              username={username}
            />
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
  comments: PropTypes.array.isRequired,
};

export default CommentsSection;
