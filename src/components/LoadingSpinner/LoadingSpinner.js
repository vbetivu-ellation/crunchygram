import React from "react";

import { SpinnerSvg } from "../common/Svg";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => <SpinnerSvg className={styles.spinner} />;

export default LoadingSpinner;
