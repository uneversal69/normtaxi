import CircleIcon from "@components/Icons/CircleIcon";
import Spacer from "@components/Spacer/Spacer";
import React, { useRef, useState } from "react";
import {useClickAway} from 'react-use';
import styles from "./TextField.module.css";

function TextField({ postfix, inputProps = {} }) {
  const inputEl = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  useClickAway(inputEl, () => {
    setIsFocused(false);
  });
  
  return (
    <div className={styles.textField}  ref={inputEl} onFocus={handleFocus} tabIndex={0}>
      <div><CircleIcon /></div>
      <Spacer x={1} />
      <input className={styles.textField__input} type="text" {...inputProps} />
      {isFocused ? postfix : false}
    </div>
  );
}


export default TextField;
