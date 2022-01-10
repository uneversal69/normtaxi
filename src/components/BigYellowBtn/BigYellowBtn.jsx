import styles from "./BIgYellowBtn.module.css";
import React from "react";

function BigYellowBtn(props) {
  const {className , namebutton} = props;
  return (
    
    <button className={styles.bigYellowBtn}>{namebutton}</button>
    
  );
}

export default BigYellowBtn;
