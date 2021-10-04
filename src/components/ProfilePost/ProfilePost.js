import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { CommentSvg, Image, LikeFilledSvg, Text } from "../common";

import styles from "./ProfilePost.module.css";

const ProfilePost = ({ id, src, likesCount, commentsCount, className }) => (
  <article className={classNames(styles.article, className)}>
    <Image src={src} alt="" />
    <Link to={`/post/${id}`} className={styles.overlay}>
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
    </Link>
  </article>
);

ProfilePost.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ProfilePost;
