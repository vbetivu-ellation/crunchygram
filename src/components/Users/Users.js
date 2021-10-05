import React, { useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UserCard from "../UserCard";
import { Heading } from "../common";
import LoadingSpinner from "../LoadingSpinner";

import styles from "./Users.module.css";
import useAction from "../../hooks/useAction";
import { fetchUsersAction } from "../../store/actions/homePage/users";
import useSelector from "../../hooks/useSelector";
import {
  getUserList,
  getUsersLoading,
} from "../../store/selectors/homePage/users";

const Users = ({ className }) => {
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
        Available users
      </Heading>
      <ul className={classNames(styles.list, {})}>
        {isLoading ? (
          <li className={styles.item}>
            <LoadingSpinner />
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
