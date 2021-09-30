import React from "react";
import PropTypes from "prop-types";

import { Avatar, Image, Text } from "../common";
import LikeButton from "../LikeButton";

import styles from "./Post.module.css";

const Post = ({ imageSrc, seriesSrc, seriesTitle, likesCount }) => (
  <article className={styles.article}>
    <div className={styles.topRow}>
      <div className={styles.avatarWrapper}>
        <Avatar src={seriesSrc} alt="User avatar" />
      </div>
      <Text as="p" size="l">
        {seriesTitle}
      </Text>
    </div>
    <div className={styles.imageWrapper}>
      <Image src={imageSrc} alt="" className={styles.image} />
    </div>
    <div className={styles.bottomRow}>
      <LikeButton onClick={() => {}} />
      {likesCount && (
        <div>
          <Text as="p" size="m">
            {likesCount}
          </Text>
        </div>
      )}
    </div>
  </article>
);

Post.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  seriesSrc: PropTypes.string.isRequired,
  seriesTitle: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default Post;
