import React from "react";
import { Link } from "react-router-dom";

import { Image, Heading, Text } from "../common";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Image src="/assets/img/yuzu-bucket.png" />
    </div>
    <div className={styles.info}>
      <Heading as="h3" size="l" className={styles.title}>
        404 - Page Not Found
      </Heading>
      <Text as="p" size="xl" className={styles.description}>
        Yuzu says there's nothing to see here!
      </Text>
      <Link to="/" className={styles.link} size="m">
        <Text
          as="span"
          size="xl"
          weight="semibold"
          className={styles.description}
        >
          TAKE ME HOME!
        </Text>
      </Link>
    </div>
  </div>
);

export default NotFound;
