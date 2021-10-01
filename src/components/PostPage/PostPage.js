import React from "react";
import CommentsSection from "../CommentsSection";

import { Avatar, CommentSvg, Image, Text } from "../common";

import LikeButton from "../LikeButton";

import styles from "./PostPage.module.css";

const PostPage = () => {
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
            <LikeButton onClick={() => {}} count={483} />
            <div className={styles.info}>
              <div className={styles.commentsIcon}>
                <CommentSvg />
              </div>
              <Text as="p" size="m">
                483
              </Text>
            </div>
          </div>
          <CommentsSection />
        </div>
      </article>
    </div>
  );
};

export default PostPage;
