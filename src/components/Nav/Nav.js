import React from "react";
import { Link } from "react-router-dom";
import useSelector from "../../hooks/useSelector";
import { getCurrentUser } from "../../store/selectors/currentUser";

import { Avatar, Logo, Text } from "../common";

import styles from "./Nav.module.css";

const Nav = () => {
  const currentUser = useSelector(getCurrentUser());
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        <Link
          to={`/profile/${currentUser.username}`}
          className={styles.profile}
        >
          <Text
            as="span"
            size="m"
            className={styles.username}
            weight="semibold"
          >
            {currentUser.username}
          </Text>
          <span className={styles.avatar}>
            <Avatar src={currentUser.avatar} alt="User avatar" />
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
