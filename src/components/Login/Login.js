import React, { useState, useCallback } from "react";

import { Button, Input } from "../common";
import useAction from "../../hooks/useAction";
import { loginUserAction } from "../../store/actions/currentUser";

import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const loginUser = useAction(loginUserAction);
  const handleChange = useCallback(
    ({ target: { value } }) => setUsername(value),
    []
  );

  const login = useCallback(() => {
    loginUser(username).then(() => window.location.assign("/"));
  }, [username, loginUser]);

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Input
            onChange={handleChange}
            value={username}
            label="Username"
            placeholder="Type here..."
          />
        </div>
        <Button onClick={login} type="filled">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
