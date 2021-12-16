import CircleIcon from "@components/Icons/CircleIcon";
import Spacer from "@components/Spacer/Spacer";
import React from "react";
import styles from "./TextField.module.css";

function TextField({ postfix }) {
  return (
    <div className={styles.textField}>
      <div><CircleIcon /></div>
      <Spacer x={1} />

      
      <input className={styles.textField__input} type="text" />
      {postfix}
    </div>
  );
}

export default TextField;
