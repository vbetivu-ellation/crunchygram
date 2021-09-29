import React from "react";
import { Link } from "react-router-dom";

import { Logo, Avatar } from "../common";

import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        <Logo />
      </Link>
      <Link to="/profile/id" className={styles.avatar}>
        <Avatar
          src="https://static.crunchyroll.com/assets/avatar/170x170/05-cr-hime-sleepy.png"
          alt="User avatar"
        />
      </Link>
    </div>
  </nav>
);

export default Nav;
