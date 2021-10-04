import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Textarea } from "../common";
import Comment from "../Comment";
import useAction from "../../hooks/useAction";
import { commentAction } from "../../store/actions/comment";

import styles from "./CommentsSection.module.css";

const CommentsSection = ({ postId, className, comments }) => {
  const ref = useRef();
  const [newCommentValue, setNewCommentValue] = useState("");
  const handleCommentValueChange = useCallback(
    ({ target: { value } }) => setNewCommentValue(value),
    []
  );

  const comment = useAction(commentAction);
  const handleSubmit = useCallback(async () => {
    await comment({ postId, text: newCommentValue });
    setNewCommentValue("");

    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [postId, comment, newCommentValue]);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <ul className={styles.list} ref={ref}>
        {comments.map(({ username, avatar, text }, index) => (
          <li key={index}>
            <Comment comment={text} avatar={avatar} username={username} />
          </li>
        ))}
      </ul>
      <div className={styles.textarea}>
        <Textarea
          value={newCommentValue}
          onChange={handleCommentValueChange}
          placeholder="Comment here..."
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  className: PropTypes.string,
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentsSection;
