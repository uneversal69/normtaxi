import React, { useEffect, useMemo, useState } from "react";
import styles from "./Timer.module.css";

const Timer = ({ countdown, ...rest }) => {
  const [time, setTime] = useState(countdown ?? 0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (countdown ? Math.max(prev - 1, 0) : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timerValue = useMemo(() => {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    return [min, sec];
  }, [time]);
  return (
    <div {...rest}>
      {`${timerValue[0]}`.padStart(2, "0")}
      <span className={styles.blink}>:</span>
      {`${timerValue[1]}`.padStart(2, "0")}
    </div>
  );
};

export default Timer;
