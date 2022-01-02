import styles from "./Container.module.css";
import React from "react";

function Container(props) {
  const {children, className } = props;
  return (
    <div className={`${styles.container} ${className ?? ''}`} >
      {children}
    </div>
  );
}

export default Container;
