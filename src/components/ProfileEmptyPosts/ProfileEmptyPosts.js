import { Text } from "../common";

import styles from "./ProfileEmptyPosts.module.css";

const ProfileEmptyPosts = () => {
  return (
    <div className={styles.wrapper}>
      <Text as="p" size="xl">
        No liked posts.
      </Text>
    </div>
  );
};

export default ProfileEmptyPosts;
