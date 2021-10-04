import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Avatar, Image, Text } from "../common";
import LikeButton from "../LikeButton";
import CommentsButton from "../CommentsButton";
import CommentsSection from "../CommentsSection";
import { toggleLikeAction } from "../../store/actions/homePage/posts";
import useAction from "../../hooks/useAction";

import styles from "./Post.module.css";

const Post = ({
  id,
  imageSrc,
  seriesSrc,
  seriesTitle,
  likesCount,
  commentsCount,
  comments,
  isUserLiked,
}) => {
  const toggleLike = useAction(toggleLikeAction);
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const handleCommentsToggle = useCallback(
    () => setIsCommentSectionVisible((value) => !value),
    []
  );
  const handleLikeToggle = useCallback(() => {
    toggleLike(id);
  }, [toggleLike, id]);

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
      <Link to={`/post/${id}`} className={styles.imageWrapper}>
        <Image src={imageSrc} alt="" className={styles.image} />
      </Link>
      <div
        className={classNames(styles.actions, {
          [styles.open]: isCommentSectionVisible,
        })}
      >
        <LikeButton
          onClick={handleLikeToggle}
          count={likesCount}
          isLiked={isUserLiked}
        />
        <CommentsButton onClick={handleCommentsToggle} count={commentsCount} />
      </div>
      {isCommentSectionVisible && <CommentsSection comments={comments} />}
    </article>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  seriesSrc: PropTypes.string.isRequired,
  seriesTitle: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  isUserLiked: PropTypes.bool,
};

Post.defaultProps = {
  comments: [],
};

export default Post;
