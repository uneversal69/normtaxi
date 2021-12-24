import styles from "./MapButton.module.css";
import React from "react";

function MapButton(props) {
  const { onClick } = props;

  return (
    <button className={styles.mapbutton} onClick={onClick} type="button">
      Карта
    </button>
  );
}

export default MapButton;
