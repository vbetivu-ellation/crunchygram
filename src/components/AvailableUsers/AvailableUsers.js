import React from "react";
import Text from "../common/Text";
import UserCard from "../UserCardComponent/UserCard";
import Styles from "../AvailableUsers/AvailableUsers.module.css";
import classNames from "classnames";

const users = [
  {
    username: "one",
    avatar:
      "https://static.crunchyroll.com/assets/avatar/170x170/1037-tokyo-revengers-mikey.png",
  },
  {
    username: "two",
    avatar:
      "https://static.crunchyroll.com/assets/avatar/170x170/1037-tokyo-revengers-mikey.png",
  },
  {
    username: "three",
    avatar:
      "https://static.crunchyroll.com/assets/avatar/170x170/1037-tokyo-revengers-mikey.png",
  },
];
const AvailableUsers = (className) => {
  return (
    <div className={classNames(Styles.availableusers, className)}>
      <Text as="span" size="xl">
        Available users
      </Text>
      <ul>
        {users.map((user) => (
          <li className={Styles.list}>
            <UserCard username={user.username} avatar={user.avatar} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableUsers;
