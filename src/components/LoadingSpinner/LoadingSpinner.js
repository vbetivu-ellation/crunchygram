import React from "react";

import { SpinnerSvg } from "../common/Svg";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={styles.wrapper}>
    <SpinnerSvg className={styles.spinner} />
  </div>
);

export default LoadingSpinner;
