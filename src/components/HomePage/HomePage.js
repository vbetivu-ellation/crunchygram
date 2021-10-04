import React, { useEffect } from "react";

import Search from "../Search";
import Post from "../Post";
import Users from "../Users";
import LoadingSpinner from "../LoadingSpinner";

import styles from "./HomePage.module.css";
import useAction from "../../hooks/useAction";
import {
  fetchPostsAction,
  fetchPostsNextPageAction,
} from "../../store/actions/post";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { arePostsLoading, getPostList } from "../../store/selectors/post";
import useSelector from "../../hooks/useSelector";

const HomePage = () => {
  const fetchNextPage = useAction(fetchPostsNextPageAction);
  const fetchFirstPage = useAction(fetchPostsAction);
  const isLoading = useSelector(arePostsLoading());
  const data = useSelector(getPostList());

  useInfiniteScroll(fetchNextPage);

  useEffect(() => {
    fetchFirstPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.users}>
        <Users />
      </div>
      <div className={styles.posts}>
        {data.map(
          ({
            id,
            avatar,
            image,
            name,
            likesCount,
            commentsCount,
            comments,
          }) => (
            <Post
              id={id}
              imageSrc={image}
              seriesTitle={name}
              seriesSrc={avatar}
              commentsCount={commentsCount}
              likesCount={likesCount}
              comments={comments}
              key={id}
            />
          )
        )}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default HomePage;
