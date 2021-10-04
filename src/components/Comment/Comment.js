import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Avatar, Text } from "../common";

import styles from "./Comment.module.css";
import useSelector from "../../hooks/useSelector";
import { getUserByUsername } from "../../store/selectors/user";

const Comment = ({ username, comment }) => {
  const { avatar } = useSelector(getUserByUsername(username));

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
  comment: PropTypes.string.isRequired,
};

export default Comment;
