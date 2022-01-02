import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";
import styles from "./LoginForm.module.css";
import CloseIcon from "@components/Icons/CloseIcon";
import ApplePay from "@components/Icons/ApplePay";
import MapPin from "@components/Icons/MapPin";
import { useMapEvents } from "react-leaflet";
import CircleIcon from "@components/Icons/CircleIcon";
import TextButton from "@components/TextButton/TextButton";
import MapButton from "@components/MapButton/MapButton";
import CompanyIcon from "@components/Icons/CompanyLogo";
import Container from "@components/Container/Container";

function LoginForm() {
    return (
        <Container>
            <Spacer x={9} /><CompanyIcon /><p>Норм Такси</p>
            <p>Добро пожаловать
                Чтобы войти как пасссажир
                введите номер телефона

            </p>
            <input className={styles.inputPhone} type="number" placeholder="+7"></input>
            <button className={styles.addBaseAcc}>Войти</button>
            <Spacer x={9} /><button className={styles.graySmallBtn}>я водитель</button>
        </Container>

    )
};


export default LoginForm;