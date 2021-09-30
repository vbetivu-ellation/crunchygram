import React from "react";
import { Text } from "../common";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Text as="p" size="l" weight="semibolt">
      © 2021 Crunchyroll GirlsGoIT
    </Text>
  </footer>
);

export default Footer;
