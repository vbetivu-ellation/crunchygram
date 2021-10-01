import React from "react";

import styles from "./HomePage.module.css";
import Search from "../Search/Search";
import Post from "../Post";
import Users from "../Users";

const likedPost = {
  seriesSrc:
    "https://1.bp.blogspot.com/-q7n4nU2bu7s/YKuBM-lttXI/AAAAAAAARrA/racmI8wVkZ0ayTxqrbE0sVy3q-VxykJLwCLcBGAsYHQ/s400/black-hair-girl-poto-in-black-brown-T-shart.jpg",
  seriesTitle: "Naruto",
  imageSrc:
    "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg",
  count: 25,
};

const HomePage = () => (
  <div className={styles.homePage}>
    <div className={styles.search}>
      <Search />
    </div>
    <div className={styles.users}>
      <Users />
    </div>
    <div className={styles.posts}>
      {new Array(3).fill().map((_, index) => (
        <Post
          className={styles.post}
          imageSrc={likedPost.imageSrc}
          seriesTitle={likedPost.seriesTitle}
          seriesSrc={likedPost.seriesSrc}
          commentsCount={likedPost.count}
          likesCount={likedPost.count}
          key={index}
        />
      ))}
    </div>
  </div>
);

export default HomePage;
