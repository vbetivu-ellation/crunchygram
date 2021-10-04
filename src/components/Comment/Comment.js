import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Avatar, Text } from "../common";

import styles from "./Comment.module.css";

const Comment = ({ username, comment, avatar }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/profile/${username}`} className={styles.author}>
        <span className={styles.avatar}>
          <Avatar src={avatar} alt="User avatar" />
        </span>
        <Text as="span" size="m" weight="semibold">
          {username}:{" "}
        </Text>
      </Link>
      <Text as="p" size="m" className={styles.text}>
        {comment}
      </Text>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
