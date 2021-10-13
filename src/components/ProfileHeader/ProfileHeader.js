import { FilledLikeSvg, Avatar, CommentSvg, Text } from "../common";
import styles from "./ProfileHeader.module.css";
import PropTypes from "prop-types";

const ProfileHeader = ({username, avatar, likescount, commentscount}) => (
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
          <span>{likescount}</span> {" "}
          likes
        </Text> 
      </div>
      <div className={styles.Comment}>
        <CommentSvg /> {" "}
        <Text as="span" size="l">
          <span>{commentscount}</span> {" "}
          comments
        </Text>
      </div>
    </div>
  </div>
);

ProfileHeader.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    likescount: PropTypes.number.isRequired,
    commentscount: PropTypes.number.isRequired,
  };

export default ProfileHeader;
