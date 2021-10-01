import React, { useState, useCallback } from "react";

import { Avatar, CommentSvg, Image, Text, Textarea } from "../common";

import Comment from "../Comment";
import LikeButton from "../LikeButton";

import styles from "./PostPage.module.css";

const PostPage = () => {
  const [newCommentValue, setNewCommentValue] = useState("");
  const handleCommentValueChange = useCallback(
    ({ target: { value } }) => setNewCommentValue(value),
    []
  );

  return (
    <div className={styles.post}>
      <article className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg"
            alt=""
            className={styles.background}
          />
          <div className={styles.sizer}>
            <Image
              src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg"
              alt=""
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.head}>
          <div className={styles.avatar}>
            <Avatar
              src="https://static.crunchyroll.com/assets/avatar/170x170/05-cr-hime-sleepy.png"
              alt="Series logo"
            />
          </div>
          <Text as="p" size="xl">
            Naruto
          </Text>
        </div>
        <div className={styles.bottomPanel}>
          <div className={styles.actions}>
            <div className={styles.info}>
              <LikeButton onClick={() => {}} />
              <Text as="p" size="s" weight="semibold">
                483
              </Text>
            </div>
            <div className={styles.info}>
              <div className={styles.commentsIcon}>
                <CommentSvg />
              </div>
              <Text as="p" size="s" weight="semibold">
                483
              </Text>
            </div>
          </div>

          <ul className={styles.commentsList}>
            {new Array(24).fill().map((_, index) => (
              <li key={index}>
                <Comment />
              </li>
            ))}
          </ul>
          <div className={styles.commentTextarea}>
            <Textarea
              value={newCommentValue}
              onChange={handleCommentValueChange}
              placeholder="Comment here..."
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
