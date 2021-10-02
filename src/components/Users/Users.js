import React, { useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Heading } from "../common";
import LoadingSpinner from "../LoadingSpinner";

import styles from "./Users.module.css";
import useAction from "../../hooks/useAction";
import { fetchUsersAction } from "../../store/actions/user";
import useSelector from "../../hooks/useSelector";
import { getUserList, getUsersLoading } from "../../store/selectors/user";

const Users = ({className}) => {
  const fetchUsers = useAction(fetchUsersAction);
  const users = useSelector(getUserList());
  const isLoading = useSelector(getUsersLoading());

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
        {isLoading ? (
          <li className={styles.item}>
            <center>
              <LoadingSpinner />
            </center>
          </li>
        ) : (
          users.map((user, index) => (
            <li key={index} className={styles.item}>
              <UserCard user={user} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

Users.propTypes = {
  className: PropTypes.string,
};

export default Users;
