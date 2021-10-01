import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Avatar, Text } from "../common";

import styles from "./Comment.module.css";
import UsersListContext from "../../contexts/UsersListContext";

const Comment = ({username, comment}) => {
  const {users} = useContext(UsersListContext);
  const {avatar} = users.find(user => user.username === username) || {};

  return (
    <div>
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
