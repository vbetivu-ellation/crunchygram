import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Text } from "../common";

import styles from "./SideBar.module.css";
import UsersListContext from "../../contexts/UsersListContext";
import LoadingSpinner from "../LoadingSpinner";

const SideBar = ({className}) => {
  const {fetchUsers, users, areUsersLoading} = useContext(UsersListContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {areUsersLoading ? (
          <center>
            <LoadingSpinner />
          </center>
        ) : users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
