import React from "react";
import Avatar from "../common/Avatar";
import Text from "../common/Text/Text";
import PropTypes from "prop-types";
import Styles from "./UserCard.module.css";
const UserCard = ({ username, avatar }) => {
  return (
    <div className={Styles.UserCard}>
      <Text as="span" size="m">
        {username}
      </Text>
      <Avatar src={avatar} alt={avatar} className={Styles.Avatar} />
    </div>
  );
};
UserCard.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
};
export default UserCard;
