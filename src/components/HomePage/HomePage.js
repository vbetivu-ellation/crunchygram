import React, { useCallback, useContext, useEffect } from "react";

import Search from "../Search";
import Post from "../Post";
import Users from "../Users";
import PostsContext from "../../contexts/PostsContext";
import LoadingSpinner from "../LoadingSpinner";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const {data, isLoading, fetchPosts, appendData} = useContext(PostsContext);

  const fetchNextPage = useCallback(() => {
    if (isLoading) return;

    fetchPosts({start: data.length}).then(appendData);
  }, [data, fetchPosts, appendData, isLoading]);

  useInfiniteScroll(fetchNextPage);

  useEffect(() => {
    fetchPosts().then(appendData);
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
        {data.map(({id, avatar, image, name, likesCount, commentsCount, comments}) => (
          <Post
            imageSrc={image}
            seriesTitle={name}
            seriesSrc={avatar}
            commentsCount={commentsCount}
            likesCount={likesCount}
            comments={comments}
            key={id}
          />
        ))}
        {isLoading && (
          <center>
            <LoadingSpinner />
          </center>
        )}
      </div>
    </div>
  );
};

export default HomePage;
