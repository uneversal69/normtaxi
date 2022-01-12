import styles from "./MapButton.module.css";
import { forwardRef } from "react";
function MapButton(props, ref) {
  const { onClick, children, className } = props;
  return (
    <button
      ref={ref}
      className={`${styles.mapButton} ${className ?? ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default forwardRef(MapButton);
