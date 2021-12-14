import React from "react";
import styles from "./TextField.module.css";

function TextField({ postfix }) {
  return (
    <>
      <div className={styles.textField}>
        <input className={styles.textField__input} type="text" />
        {postfix}
      </div>
    </>
  );
}

export default TextField;
