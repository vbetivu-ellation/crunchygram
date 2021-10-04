import { Button, Text } from "../common";
import { resetSearchAction } from "../../store/actions/homePage/posts";
import useAction from "../../hooks/useAction";

import styles from "./HomeEmptyPosts.module.css";

const HomeEmptyPosts = () => {
  const resetSearch = useAction(resetSearchAction);

  return (
    <div className={styles.wrapper}>
      <Text as="p" size="xl" className={styles.description}>
        No posts found!
      </Text>
      <Button onClick={resetSearch} type="filled">
        Reset search
      </Button>
    </div>
  );
};

export default HomeEmptyPosts;
