import React from "react";

import { Logo, Avatar } from "../common";

import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.avatar}>
        <Avatar />
      </div>
    </div>
  </nav>
);

export default Nav;
