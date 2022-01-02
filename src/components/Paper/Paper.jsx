import styles from "./Paper.module.css";
import React from "react";

function Paper(props) {
  const { children, className } = props;
  return (
    <div className={`${styles.paper} ${className ?? ""}`}>{children}</div>
  );
}

export default Paper;
