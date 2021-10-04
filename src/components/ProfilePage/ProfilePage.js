import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProfileHeader from "../ProfileHeader";
import ProfilePost from "../ProfilePost";
import { fetchUserAction } from "../../store/actions/profilePage";
import useSelector from "../../hooks/useSelector";
import { getUser } from "../../store/selectors/profilePage";
import useAction from "../../hooks/useAction";

import styles from "./ProfilePage.module.css";
import LoadingSpinner from "../LoadingSpinner";
import ProfileEmptyPosts from "../ProfileEmptyPosts";

const ProfilePage = () => {
  const { username } = useParams();
  const user = useSelector(getUser({ username }));
  const fetchUser = useAction(fetchUserAction);
  const isLoading = !user;

  useEffect(() => {
    if (!user) {
      fetchUser(username).catch(() => {
        window.location.replace("/404");
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

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
          {user.likedPosts.length === 0 ? (
            <ProfileEmptyPosts />
          ) : (
            <ul className={styles.grid}>
              {user.likedPosts.map((post, index) => (
                <li className={styles.postWrapper} key={index}>
                  <ProfilePost
                    id={post.id}
                    className={styles.post}
                    src={post.image}
                    commentsCount={post.commentsCount}
                    likesCount={post.likesCount}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
};

export default ProfilePage;
