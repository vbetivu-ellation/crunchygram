import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Avatar, Image, Text } from "../common";
import LikeButton from "../LikeButton";
import CommentsButton from "../CommentsButton";
import CommentsSection from "../CommentsSection";
import { toggleLikeAction } from "../../store/actions/like";
import useAction from "../../hooks/useAction";

import styles from "./Post.module.css";
import useSelector from "../../hooks/useSelector";
import { getPost } from "../../store/selectors/posts";

const Post = ({ id }) => {
  const {
    image,
    avatar,
    name,
    likesCount,
    commentsCount,
    comments,
    isUserLiked,
  } = useSelector(getPost(id));
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
          <Avatar src={avatar} alt="User avatar" />
        </div>
        <Text as="p" size="l">
          {name}
        </Text>
      </div>
      <Link to={`/post/${id}`} className={styles.imageWrapper}>
        <Image src={image} alt="" className={styles.image} />
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
      {isCommentSectionVisible && (
        <CommentsSection postId={id} comments={comments} />
      )}
    </article>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Post;
