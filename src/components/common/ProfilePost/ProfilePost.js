import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import LikeSvg from "../LikeSvg";
import CommentSvg from "../CommentSvg";
import Text from "../Text";
import { Link } from "react-router-dom";
import styles from "./ProfilePost.module.css";

const ProfilePost = ({ src, likesCount, commentsCount }) => (
  <div className={styles.post}>
    <Image src={src} alt="Profile Post" />
    <Link className={styles.overlay} to="/post/id">
      <div className={styles.likes}>
        <LikeSvg className={styles.icon} />
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
  </div>
);

ProfilePost.propTypes = {
  src: PropTypes.string.isRequired,
  likesCount: PropTypes.string.isRequired,
  commentsCount: PropTypes.string.isRequired,
};

export default ProfilePost;
