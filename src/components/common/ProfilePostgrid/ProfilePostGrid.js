import React from "react";
import ProfilePost from "../ProfilePost";
import styles from "./ProfilePostGrid.module.css";

const ProfilePostGrid = () => (
  <div className={styles.grid}>
    <ProfilePost
      src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
      likesCount={20}
      commentsCount={30}
    />
    <ProfilePost
      src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
      likesCount={20}
      commentsCount={30}
    />
    <ProfilePost
      src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
      likesCount={20}
      commentsCount={30}
    />
  </div>
);

export default ProfilePostGrid;
