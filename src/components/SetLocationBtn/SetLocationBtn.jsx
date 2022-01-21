import styles from "./SetLocationBtn.module.css";
import { forwardRef } from "react";
function SetLocationBtn(props, ref) {
  const { onClick, children, className } = props;
  return (
    <button
      ref={ref}
      className={`${styles.bigYellowBtn} ${className ?? ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default forwardRef(SetLocationBtn);