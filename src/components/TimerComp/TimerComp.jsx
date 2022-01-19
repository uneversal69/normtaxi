import React from "react";
import styles from "./TimerComp.module.css";

const TimerComp = ({ time, name }) => {
  return (
    <div className={styles.timer} hidden={true}>
      <div className={styles.timer__name}>{name}</div>
      <div className={styles.timer__min}>{time}</div>
    </div>
  );
};

export default TimerComp;
