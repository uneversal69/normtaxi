import React, { useMemo } from "react";
import styles from "./Spacer.module.css";

const Spacer = ({ x, y, flexBasis, display }) => {
  const style = useMemo(() => {
    const initialStyle = {
      width: x ? x * 6 : undefined,
      height: y ? y * 6 : undefined,
    };
    if (flexBasis) initialStyle.flexBasis = flexBasis;
    if (display) initialStyle.display = display;
    return initialStyle;
  }, [x, y, flexBasis, display]);
  return <div className={styles.spacer} style={style}></div>;
};

export default Spacer;
