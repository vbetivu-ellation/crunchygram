import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Text } from "../common";

import styles from "./SideBar.module.css";

const activeUsers = [
  {
    id: 1,
    avatar:
      "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
    username: "Diana",
    likesCount: 55,
    commentCount: 85,
  },
  {
    id: 2,
    avatar:
      "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
    username: "Diana",
    likesCount: 55,
    commentCount: 85,
  },
  {
    id: 4,
    avatar:
      "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
    username: "Diana",
    likesCount: 55,
    commentCount: 85,
  },
  {
    id: 5,
    avatar:
      "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
    username: "Diana",
    likesCount: 55,
    commentCount: 85,
  },
];

const SideBar = ({ className }) => {
  return (
    <div className={classNames(styles.sideBar, className)}>
      <Text
        as="p"
        size="xl"
        weight="semibold"
        className={styles.activeUsersTitle}
      >
        Active users
      </Text>
      <div className={styles.userCard}>
        {activeUsers.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
