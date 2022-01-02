import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import styles from "./LoginForm.module.css";
import CompanyIcon from "@components/Icons/CompanyLogo";
import Container from "@components/Container/Container";
import Paper from "@components/Paper/Paper";

function LoginForm() {
  return (
    <Container>
      <Paper>
        <Spacer x={9} />
        <CompanyIcon />
        <p>Норм Такси</p>
        <p>Добро пожаловать Чтобы войти как пасссажир введите номер телефона</p>
        <input
          className={styles.inputPhone}
          type="number"
          placeholder="+7"
        ></input>
        <button className={styles.addBaseAcc}>Войти</button>
        <Spacer x={9} />
        <button className={styles.graySmallBtn}>я водитель</button>
      </Paper>
    </Container>
  );
}

export default LoginForm;
