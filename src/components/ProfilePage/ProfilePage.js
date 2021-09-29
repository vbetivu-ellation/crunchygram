import React from "react";

import ProfileHeader from "../ProfileHeader";
import ProfilePost from "../ProfilePost";

import styles from "./ProfilePage.module.css";

const likedPosts = [
  {
    imageSrc:
      "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg",
    count: 25,
  },
];
const user = {
  id: 3,
  avatar:
    "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
  username: "Diana",
  likesCount: 55,
  commentCount: 85,
};

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.wrapper}>
        <ProfileHeader
          id={user.id}
          avatar={user.avatar}
          username={user.username}
          likesCount={user.likesCount}
          commentCount={user.commentCount}
        />
        <div className={styles.separator} />
        <div className={styles.postsGrid}>
          {likedPosts.map((post) => (
            <div className={styles.postWrapper}>
              <ProfilePost
                className={styles.post}
                src={post.imageSrc}
                commentsCount={post.likesCount}
                likesCount={post.likesCount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
