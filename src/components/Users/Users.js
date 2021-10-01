import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Heading } from "../common";

import styles from "./Users.module.css";

const user = {
  id: 5,
  avatar:
    "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
  username: "Diana",
  likesCount: 55,
  commentCount: 85,
};

const Users = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Heading as="h3" size="xs" className={styles.title}>
        Active users
      </Heading>
      <ul className={classNames(styles.list, {})}>
        {new Array(3).fill().map((_, index) => (
          <li key={index} className={styles.item}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Users.propTypes = {
  className: PropTypes.string,
};

export default Users;
