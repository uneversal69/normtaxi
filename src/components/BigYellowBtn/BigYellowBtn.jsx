import styles from "./BIgYellowBtn.module.css";
import React from "react";

function BigYellowBtn({ children, className, variant, ...rest }) {
  return (
    <button
      className={`${styles.btn} ${className} ${
        styles[`btn--${variant}`]
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default BigYellowBtn;
