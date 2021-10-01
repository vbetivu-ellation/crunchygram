import React from "react";
import PropTypes from "prop-types";

import { Avatar, Text } from "../common";

import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <div className={styles.userCard}>
      <Avatar src={user.avatar} className={styles.avatar} />
      <Text as="p" size="l" weight="semibold">
        {user.username}
      </Text>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default UserCard;
