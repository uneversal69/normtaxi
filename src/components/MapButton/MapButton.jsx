import styles from "./MapButton.module.css";
import React from "react";

function MapButton() {
    const handleSelectOnMap = (e) => {
    }
  
    return
    (<button className={styles.mapbutton} onClick={handleSelectOnMap}>Карта</button>)
}

export default MapButton;