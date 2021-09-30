import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { CommentSvg, Image, LikeFilledSvg, Text } from "../common";

import styles from "./ProfilePost.module.css";

const ProfilePost = ({ src, likesCount, commentsCount, className }) => (
  <article className={classNames(styles.article, className)}>
    <Image src={src} alt="" />
    <div className={styles.overlay}>
      <div className={styles.likes}>
        <LikeFilledSvg className={styles.icon} />
        <Text as="p" size="m">
          {likesCount}
        </Text>
      </div>
      <div className={styles.comments}>
        <CommentSvg className={styles.icon} />
        <Text as="p" size="m">
          {commentsCount}
        </Text>
      </div>
    </div>
  </article>
);

ProfilePost.propTypes = {
  src: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ProfilePost;
