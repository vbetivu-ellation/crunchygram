import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Avatar from "../Avatar";
import Text from "../Text";
import Heading from "../Heading";
import { LikeFilledSvg, CommentSvg } from "../Svg/index";

import styles from "./ProfileHeader.module.css";

const ProfileHeader = ({ avatar, username, likesCount, commentCount, id }) => {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.avatar}>
        <Avatar src={avatar} className={styles.avatarImage} alt={id} />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.nickName}>
          <Heading as="h4" size="l" weight="heading">
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
    </div>
  );
};

ProfileHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default ProfileHeader;
