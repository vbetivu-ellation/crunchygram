import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Avatar, Image, Text } from "../common";
import LikeButton from "../LikeButton";
import CommentsButton from "../CommentsButton";
import CommentsSection from "../CommentsSection";

import styles from "./Post.module.css";

const Post = ({
  imageSrc,
  seriesSrc,
  seriesTitle,
  likesCount,
  commentsCount,
  comments,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const handleCommentsToggle = useCallback(
    () => setIsCommentSectionVisible((value) => !value),
    [],
  );
  const handleLikeToggle = useCallback(() => {
    setIsLiked(!isLiked);
  }, [setIsLiked, isLiked]);

  return (
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
      <div
        className={classNames(styles.actions, {
          [styles.open]: isCommentSectionVisible,
        })}
      >
        <LikeButton
          onClick={handleLikeToggle}
          count={likesCount}
          isLiked={isLiked}
        />
        <CommentsButton onClick={handleCommentsToggle} count={commentsCount} />
      </div>
      {isCommentSectionVisible && <CommentsSection comments={comments} />}
    </article>
  );
};

Post.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  seriesSrc: PropTypes.string.isRequired,
  seriesTitle: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};

Post.defaultProps = {
  comments: [],
};

export default Post;
