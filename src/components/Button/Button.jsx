import styles from "./Button.module.css";
import React from "react";

function Button(props) {
  const { onClick, children, type = "button", fullWidth, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${
        fullWidth ? styles["button--fullWidth"] : ""
      }`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
