import styles from "./Dialog.module.css";
import React, { forwardRef } from "react";
import CloseIcon from "@components/Icons/CloseIcon";
import Paper from "@components/Paper/Paper";

function Dialog(props, ref) {
  const { children, className, open, onClose } = props;
  return open ? (
    <div ref={ref} className={`${styles.dialog} ${className ?? ""}`}>
      <div className={styles.dialog__content}>
        <div className={styles.dialogCloseBtn} onClick={onClose}>
          <CloseIcon />
        </div>
        <Paper>{children}</Paper>
      </div>
    </div>
  ) : null;
}

export default forwardRef(Dialog);
