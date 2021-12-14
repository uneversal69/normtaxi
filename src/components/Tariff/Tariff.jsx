import React from "react";
import styles from "./Tariff.module.css";

const Tariff = ({ price, name, active, onClick }) => {
  return (
    <div className={`${styles.tariff} ${active ? styles.tariffActive : ""}`} onClick={onClick}>
      <div className={styles.tariff__name}>{name}</div>
      <div className={styles.tariff__price}>{price}Р</div>
    </div>
  );
};

export default Tariff;
