import React from "react";
import { Link } from "react-router-dom";

import { Logo, Avatar, Text } from "../common";

import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        <Logo />
      </Link>
      <Link to="/profile/id" className={styles.profile}>
        <Text as="span" size="m" className={styles.username} weight="semibold">
          memedealer
        </Text>
        <span className={styles.avatar}>
          <Avatar
            src="https://static.crunchyroll.com/assets/avatar/170x170/05-cr-hime-sleepy.png"
            alt="User avatar"
          />
        </span>
      </Link>
    </div>
  </nav>
);

export default Nav;
