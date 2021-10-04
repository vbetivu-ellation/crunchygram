import React from "react";
import { Link } from "react-router-dom";
import useAction from "../../hooks/useAction";
import useSelector from "../../hooks/useSelector";
import { getCurrentUser } from "../../store/selectors/currentUser";
import { logOutAction } from "../../store/actions/currentUser";

import { Avatar, Logo, Text } from "../common";
import SignOutSvg from "../common/Svg/components/SignOutSvg";

import styles from "./Nav.module.css";

const Nav = () => {
  const currentUser = useSelector(getCurrentUser());
  const logout = useAction(logOutAction);

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        {!!currentUser && (
          <div className={styles.rightActions}>
            <Link
              to={`/profile/${currentUser.username}`}
              className={styles.profile}
            >
              <Text
                as="span"
                size="m"
                className={styles.username}
                weight="semibold"
              >
                {currentUser.username}
              </Text>

              <span className={styles.avatar}>
                <Avatar src={currentUser.avatar} alt="User avatar" />
              </span>
            </Link>
            <button onClick={logout}>
              <SignOutSvg />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
