import React from "react";
import styles from "./Footer.module.css";
import { Text } from "../common";

const Footer = () => (
  <footer className={styles.footer}>
    <Text as="p" size="l">
      © 2021 Crunchyroll GirlsGoIT
    </Text>
  </footer>
);

export default Footer;
