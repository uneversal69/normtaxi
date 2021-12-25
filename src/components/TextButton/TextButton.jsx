import styles from "./TextButton.module.css";
import React from "react";

function TextButton(props) {
  const { onClick, children } = props;

  return (
    <button className={styles.textButton} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default TextButton;
