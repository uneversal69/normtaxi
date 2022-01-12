import styles from "./Container.module.css";
import React, { forwardRef } from "react";

function Container(props, ref) {
  const {children, className } = props;
  return (
    <div ref={ref} className={`${styles.container} ${className ?? ''}`} >
      {children}
    </div>
  );
}

export default forwardRef(Container);
