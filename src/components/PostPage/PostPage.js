import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentsSection from "../CommentsSection";
import { Avatar, CommentSvg, Image, Text } from "../common";
import useAction from "../../hooks/useAction";
import useSelector from "../../hooks/useSelector";
import LikeButton from "../LikeButton";
import { fetchPostAction } from "../../store/actions/postPage";
import { toggleLikeAction } from "../../store/actions/like";
import LoadingSpinner from "../LoadingSpinner";
import { getPost } from "../../store/selectors/posts";

import styles from "./PostPage.module.css";

const PostPage = () => {
  const { id } = useParams();
  const fetchPost = useAction(fetchPostAction);
  const post = useSelector(getPost(id));
  const isLoading = !post;

  const toggleLike = useAction(toggleLikeAction);
  const handleLikeClick = useCallback(() => {
    toggleLike(id);
  }, [id, toggleLike]);

  useEffect(() => {
    fetchPost(id).catch(() => {
      window.location.replace("/404");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={styles.post}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <article className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image src={post.image} alt="" className={styles.background} />
            <div className={styles.sizer}>
              <Image src={post.image} alt="" className={styles.image} />
            </div>
          </div>

          <div className={styles.head}>
            <div className={styles.avatar}>
              <Avatar src={post.avatar} alt="Series logo" />
            </div>
            <Text as="p" size="xl">
              {post.name}
            </Text>
          </div>
          <div className={styles.bottomPanel}>
            <div className={styles.actions}>
              <LikeButton
                isLiked={post.isUserLiked}
                onClick={handleLikeClick}
                count={post.likesCount}
              />
              <div className={styles.info}>
                <div className={styles.commentsIcon}>
                  <CommentSvg />
                </div>
                <Text as="p" size="m">
                  {post.commentsCount}
                </Text>
              </div>
            </div>
            <CommentsSection comments={post.comments} />
          </div>
        </article>
      )}
    </div>
  );
};

export default PostPage;
