import React from "react";
import PropTypes from "prop-types";

import { Avatar, Heading, Image, Text } from "../common";

import styles from "./PostPage.module.css";
import LikeButton from "../LikeButton";

const PostPage = ({ src, seriesTitle, seriesSrc, likesCount }) => (
  <section className={styles.section}>
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt="" className={styles.image} />
      </div>

      <div className={styles.head}>
        <div className={styles.avatar}>
          <Avatar src={seriesSrc} alt="Series logo" />
        </div>
        <Heading as="h2" size="xs">
          {seriesTitle}
        </Heading>
      </div>
      <div className={styles.actions}>
        <LikeButton onClick={() => {}} />
        <Text as="p" size="s" weight="semibold">
          {likesCount}
        </Text>
      </div>
    </article>
  </section>
);

PostPage.propTypes = {
  src: PropTypes.string.isRequired,
  seriesTitle: PropTypes.string.isRequired,
  seriesSrc: PropTypes.string.isRequired,
  likesCount: PropTypes.string.isRequired,
};

export default PostPage;
