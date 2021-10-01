import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Avatar, Text } from "../common";

import styles from "./Comment.module.css";

const authorId = "312";
const authorName = "Eric";
const comment =
  "hello aleohello aleohello aleohello aleohello aleohello aleohello aleo";
const authorAvatar =
  "https://static.crunchyroll.com/assets/avatar/170x170/05-cr-hime-sleepy.png";

const Comment = () =>
  // {
  //   commentId
  // }
  {
    return (
      <div>
        <Link to={`/profile/${authorId}`} className={styles.author}>
          <span className={styles.avatar}>
            <Avatar src={authorAvatar} alt="User avatar" />
          </span>
          <Text as="span" size="m" weight="semibold">
            {authorName}:{" "}
          </Text>
        </Link>
        <Text as="p" size="m" className={styles.text}>
          {comment}
        </Text>
      </div>
    );
  };

// Comment.propTypes = {
//   commentId: PropTypes.string.isRequired,
// };

export default Comment;
