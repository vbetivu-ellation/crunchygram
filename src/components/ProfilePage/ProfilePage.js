import React from "react";
import { useParams } from "react-router-dom";

import ProfileHeader from "../ProfileHeader";
import ProfilePost from "../ProfilePost";
// import { fetchUserAction } from "../../store/actions/homePage/users";
import useSelector from "../../hooks/useSelector";
import { getUserByUsername } from "../../store/selectors/homePage/users";
// import useAction from "../../hooks/useAction";

import styles from "./ProfilePage.module.css";
import LoadingSpinner from "../LoadingSpinner";

const ProfilePage = () => {
  const { username } = useParams();
  const user = useSelector(getUserByUsername(username));
  // const fetchUser = useAction(fetchUserAction);
  const isLoading = !user;

  console.log(user);

  // useEffect(() => {
  //   fetchUser(username).catch(() => {
  //     window.location.href = "/404";
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <section className={styles.section}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ProfileHeader
            id={user.id}
            avatar={user.avatar}
            username={user.username}
            likesCount={user.likesCount}
            commentCount={user.commentsCount}
          />
          <ul className={styles.grid}>
            {user?.likedPosts.map((post, index) => (
              <li className={styles.postWrapper} key={index}>
                <ProfilePost
                  className={styles.post}
                  src={post.image}
                  commentsCount={post.commentsCount}
                  likesCount={post.likesCount}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default ProfilePage;
