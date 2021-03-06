import { FilledLikeSvg, Avatar, CommentSvg, Text } from "../common";
import styles from "./ProfileHeader.module.css";
import PropTypes from "prop-types";

const ProfileHeader = ({username, avatar, likesCount, commentsCount}) => (
  <div className={styles.ProfileHeader}>
    <div className = {styles.Avatar}>
      <Avatar
        src={avatar}
        alt=""
      />
    </div>
    <div className={styles.Center}>
      <div className={styles.Text}>
        <Text as="span" size="xl">
          {username}
        </Text>
      </div>
      <div className={styles.FilledLike}>
        <FilledLikeSvg /> {" "}
        <Text as="span" size="l">
          <span>{likesCount}</span> {" "}
          likes
        </Text> 
      </div>
      <div className={styles.Comment}>
        <CommentSvg /> {" "}
        <Text as="span" size="l">
          <span>{commentsCount}</span> {" "}
          comments
        </Text>
      </div>
    </div>
  </div>
);

ProfileHeader.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
  };

export default ProfileHeader;
