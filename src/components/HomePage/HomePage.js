import React, { useCallback, useContext, useEffect } from "react";

import styles from "./HomePage.module.css";
import Search from "../Search/Search";
import Post from "../Post";
import SideBar from "../SideBar";
import PostsContext from "../../contexts/PostsContext";
import LoadingSpinner from "../LoadingSpinner";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { UsersListProvider } from "../../contexts/UsersListContext";

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
      <div className={styles.sideBarWrapper}>
        <UsersListProvider>
          <SideBar className={styles.sideBar} />
        </UsersListProvider>
      </div>
      <div className={styles.postsContainer}>
        {data.map(({id, avatar, image, name, likesCount, commentsCount}) => (
          <div className={styles.postWrapper} key={id}>
            <Post
              className={styles.post}
              imageSrc={image}
              seriesTitle={name}
              seriesSrc={avatar}
              commentsCount={commentsCount}
              likesCount={likesCount}
            />
          </div>
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
