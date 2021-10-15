import React from "react";
import ProfilePost from "../ProfilePost";
import styles from "./ProfilePostGrid.module.css";

const posts = [
  {
    src: "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
    likesCount: 20,
    commentsCount: 30,
  },
  {
    src: "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
    likesCount: 1,
    commentsCount: 4,
  },
  {
    src: "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
    likesCount: 15,
    commentsCount: 12,
  },
];

const ProfilePostGrid = () => (
  <div className={styles.grid}>
    {posts.map((post) => (
      <ProfilePost
        src={post.src}
        likesCount={post.likesCount}
        commentsCount={post.likesCount}
      />
    ))}
  </div>
);

export default ProfilePostGrid;
