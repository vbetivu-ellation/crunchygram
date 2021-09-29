import React from "react";

import { Avatar, Image, Text } from "../common";

import styles from "./PostPage.module.css";
import LikeButton from "../LikeButton";

const PostPage = () => (
  <section className={styles.section}>
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg"
          alt=""
          className={styles.image}
        />
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
      <div className={styles.actions}>
        <LikeButton onClick={() => {}} />
        <Text as="p" size="s" weight="semibold">
          483
        </Text>
      </div>
    </article>
  </section>
);

export default PostPage;
