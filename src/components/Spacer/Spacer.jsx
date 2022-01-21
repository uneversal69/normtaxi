import React, { useMemo } from "react";
import styles from "./Spacer.module.css";

const Spacer = ({ x, y, flexBasis, display, flexGrow }) => {
  const style = useMemo(() => {
    const initialStyle = {
      width: x ? x * 6 : undefined,
      height: y ? y * 6 : undefined,
    };
    if (flexBasis) initialStyle.flexBasis = flexBasis;
    if (display) initialStyle.display = display;
    if(flexGrow) initialStyle.flexGrow = flexGrow;
    return initialStyle;
  }, [x, y, flexBasis, display, flexGrow]);
  return <div className={styles.spacer} style={style}></div>;
};

export default Spacer;
