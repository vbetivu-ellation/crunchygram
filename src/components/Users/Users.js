import React, { useEffect, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Heading } from "../common";
import UsersListContext from "../../contexts/UsersListContext";

import styles from "./Users.module.css";

const Users = ({ className }) => {
  const { fetchUsers, users } = useContext(UsersListContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Heading as="h3" size="xs" className={styles.title}>
        Active users
      </Heading>
      <ul className={classNames(styles.list, {})}>
        {users.map((user, index) => (
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
