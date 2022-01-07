import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import styles from "./LoginForm.module.css";
import CompanyIcon from "@components/Icons/CompanyLogo";
import Container from "@components/Container/Container";
import Paper from "@components/Paper/Paper";

const initialValues = {
  phone: "",
};

function LoginForm() {
  const onSubmit = async (values) => {
    console.log("создаем заказ, вот данные формы:", values);
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Paper>
              <div className={styles.loginhead}>
                <Spacer x={8} />
                <CompanyIcon />
                <Spacer x={2} /><p className={styles.headerName}>Норм Такси</p>

              </div>
              <Spacer y={2} />
              <p className={styles.headerText}>Добро пожаловать!</p>
              <p className={styles.headerText}> Чтобы войти как пасссажир введите номер телефона</p>
              <Spacer y={4} />
              <Field
                name="phone"
                render={(props) => (
                  <input
                    className={styles.inputPhone}
                    type="number"
                    placeholder="+7"
                    {...props.input}
                    
                  />

                )}
              />

              <Divider variant="horizontal" y={0} />
              <Spacer y={2} />


              <button className={styles.addBaseAcc} type="submit">Войти</button>
              <Spacer y={4} />

              <div className={styles.loginhead}><Spacer x={15.5} /> <button className={styles.graySmallBtn} type="button">я водитель</button></div>

            </Paper>
          </form>
        )} />
    </Container>
  );
}

export default LoginForm;
