import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Avatar, Text } from "../common";

import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <Link to="/profile/id" className={styles.wrapper}>
      <Avatar src={user.avatar} className={styles.avatar} alt="User avatar." />
      <Text as="p" size="l" weight="semibold" className={styles.username}>
        {"abcdef".repeat(Math.floor(Math.random() * 5 + 1))}
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
