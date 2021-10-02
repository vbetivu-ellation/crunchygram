import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Avatar, Text } from "../common";

import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <Link to={`/profile/${user.username}`} className={styles.wrapper}>
      <Avatar src={user.avatar} className={styles.avatar} alt="User avatar." />
      <Text as="p" size="m" weight="semibold" className={styles.username}>
        {user.username}
      </Text>
    </Link>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default UserCard;
