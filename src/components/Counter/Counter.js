import React from "react";

import styles from "./Counter.module.css";
import useAction from "../../hooks/useAction";
import useSelector from "../../hooks/useSelector";
import { decrementCounterAction, incrementCounterAction } from "../../store/actions/homePage/counter";
import { getCounterValue } from "../../store/selectors/homePage/counter";

const Counter = () => {
  const increment = useAction(incrementCounterAction);
  const decrement = useAction(decrementCounterAction);
  const counterValue = useSelector(getCounterValue());

  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrement}>
        - decrement
      </button>
      <span>{counterValue}</span>
      <button className={styles.button} onClick={increment}>
        + increment
      </button>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
