import React from "react";
import styles from "./Divider.module.css";

function Divider({ variant = "horizontal", y }) {
  return (
    <div
      className={`${styles.divider} ${
        variant !== "horizontal" ? styles.dividerVertical : ""
      }`}
      style={{ height: y ? y * 6 : undefined }}
    ></div>
  );
}

export default Divider;
