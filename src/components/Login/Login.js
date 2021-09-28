import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { Button, Input } from "../common";

import styles from "./Login.module.css";

const Login = ({ isAuthenticated }) => {
  const [username, setUsername] = useState("");
  const handleChange = useCallback(
    ({ target: { value } }) => setUsername(value),
    []
  );

  return isAuthenticated ? null : (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles["input-wrapper"]}>
          <Input
            onChange={handleChange}
            value={username}
            label="Username"
            placeholder="Type here..."
          />
        </div>
        <Button onClick={() => {}} type="filled">
          Submit
        </Button>
      </div>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Login;
