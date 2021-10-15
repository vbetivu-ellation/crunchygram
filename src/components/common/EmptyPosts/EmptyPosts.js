import React from "react";
import { Text } from "..";
import styles from "./EmptyPosts.module.css"

const EmptyPosts = () => (
  <div className = {styles.emptyPosts} >
    <Text as="span" size="l">
      No liked posts.
    </Text>
  </div>
);

export default EmptyPosts;
