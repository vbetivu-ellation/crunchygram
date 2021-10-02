import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Avatar, Text, Heading, LikeFilledSvg, CommentSvg } from "../common";

import styles from "./ProfileHeader.module.css";

const ProfileHeader = ({ avatar, username, likesCount, commentCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatarSpacer}>
          <Avatar src={avatar} className={styles.avatar} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.nickName}>
          <Heading as="h4" size="l">
            {username}
          </Heading>
        </div>
        <div className={styles.activities}>
          <div className={classNames(styles.activity, styles.likeActivity)}>
            <LikeFilledSvg className={styles.likeIcon} />
            <Text as="p" size="l">
              <Text as="span" size="l" weight="semibold">
                {likesCount}
              </Text>{" "}
              likes
            </Text>
          </div>
          <div className={styles.activity}>
            <CommentSvg className={styles.commentIcon} />
            <Text as="p" size="l">
              <Text as="span" size="l" weight="semibold">
                {commentCount}
              </Text>{" "}
              comments
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};

ProfileHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default ProfileHeader;
