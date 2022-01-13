import { Form, Field } from "react-final-form";
import PhoneInput from "react-phone-number-input/input";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import styles from "./LoginForm.module.css";
import CompanyIcon from "@components/Icons/CompanyLogo";
import Container from "@components/Container/Container";
import Paper from "@components/Paper/Paper";
import BigYellowBtn from "@components/BigYellowBtn/BigYellowBtn";
import { useDisableClickPropagation } from "@utils";
import { useApi, authAsPassengerUri, authCheckCodeUri, AppContext } from "@modules/api";
import { useContext, useState } from "react";

const initialValues = {
  phone: "",
};

// /auth/passenger
// POST /auth/code { code, type: userType, }
const PASSENGER = "PASSENGER";
const DRIVER = "DRIVER";

function LoginForm() {
  const rootRef = useDisableClickPropagation();
  const { handleLogin } = useContext(AppContext);
  const [userType, setUserType] = useState(PASSENGER);
  const [sentCode, setSentCode] = useState(false);
  const [{ loading }, refetch, cancel] = useApi(
    { method: "POST" },
    { manual: true }
  );

  const onSubmit = async ({ phone }) => {
    const { data } = await refetch({
      data: { phone: `${phone}`.replace("+", "") },
      url: authAsPassengerUri,
    });
    if (!data) return { phone: "Неизвестная ошибка" };
    if (data.success) {
      setSentCode(true);
      alert(`Код авторизации отправлен на номер ${phone}!`);
    } else {
      return { phone: data.error };
    }
  };

  const handleCodeChange = async (e) => {
    const code = e.target.value;
    if (code.length === 6) {
      const { data } = await refetch({
        data: { code, type: userType },
        url: authCheckCodeUri,
      });
      if (!data) return { phone: "Неизвестная ошибка" };
      if (data.success) {
        handleLogin(data.user ?? { sometest: true })
        alert(`Успешная авторизация!`);
      } else {
        alert(data.error);
      }
    }
  };

  return (
    <Container ref={rootRef}>
      {sentCode ? (
        <Paper>
          <p className={styles.headerText}>Введите код из смс</p>
          <input
            className={styles.inputPhone}
            onChange={handleCodeChange}
            maxLength={6}
          />
        </Paper>
      ) : (
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Paper>
                <div className={styles.logo}>
                  <CompanyIcon />
                  <Spacer x={2} />
                  <p className={styles.headerName}>Норм Такси</p>
                </div>
                <Spacer y={2} />
                <p className={styles.headerText}>Добро пожаловать!</p>
                <p className={styles.headerText}>
                  {" "}
                  Чтобы войти как пасссажир введите номер телефона
                </p>
                <Spacer y={4} />
                <Field
                  name="phone"
                  render={({ input, meta }) => (
                    <>
                      <PhoneInput
                        className={styles.inputPhone}
                        country="RU"
                        {...input}
                        placeholder="+7"
                      />
                      {meta.error || meta.submitError}
                    </>
                  )}
                />
                <Spacer y={2} />

                <BigYellowBtn namebutton={"Войти"} disabled={loading} />
                <Spacer y={4} />

                <div className={styles.loginhead}>
                  <Spacer x={15.5} />{" "}
                  <button className={styles.graySmallBtn} type="button">
                    я водитель
                  </button>
                </div>
              </Paper>
            </form>
          )}
        />
      )}
    </Container>
  );
}

export default LoginForm;
