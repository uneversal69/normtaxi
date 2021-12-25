import styles from "./MapButton.module.css";
import React from "react";

function MapButton(props) {
  const { onClick, children, className } = props;
  return (
    <button className={`${styles.mapButton} ${className ?? ''}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default MapButton;
