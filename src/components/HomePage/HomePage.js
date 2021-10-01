import React, { useCallback, useEffect, useState } from "react";

import styles from "./HomePage.module.css";
import Search from "../Search/Search";
import Post from "../Post";
import SideBar from "../SideBar";
import { API } from "../../api";
import LoadingSpinner from "../LoadingSpinner";
import debounce from "../../util/debounce";

const HomePage = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const fetch = useCallback(async () => {
    const start = data.length;
    const result = await API.getPosts({ start });

    setData([ ...data, ...result ]);
    setIsLoading(false);
  }, [ data, setData, setIsLoading ]);
  const handleScroll = debounce(useCallback(() => {
    const isNearTheBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 200;
    if (isNearTheBottom && !isLoading) {
      setIsLoading(true);
      fetch();
    }
  }, [ isLoading, fetch ]));

  useEffect(() => {
    setIsLoading(true);
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ handleScroll ]);

  return (
    <div className={styles.homePage}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.sideBarWrapper}>
        <SideBar className={styles.sideBar} />
      </div>
      <div className={styles.postsContainer}>
        {data.map(({ id, avatar, image, name, likesCount, commentsCount }) => (
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
