import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";
import styles from "./MainFrom.module.css";
import CloseIcon from "@components/Icons/CloseIcon";
import ApplePay from "@components/Icons/ApplePay";
import MapPin from "@components/Icons/MapPin";
import { useMapEvents } from "react-leaflet";
import CircleIcon from "@components/Icons/CircleIcon";
import TextButton from "@components/TextButton/TextButton";
import MapButton from "@components/MapButton/MapButton";
import Container from "@components/Container/Container";

function StatusForm (){
    return (<div className={styles.statusForm}></div>)
}
export default StatusForm;