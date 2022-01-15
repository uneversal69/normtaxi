
import styles from "./OrderDialog.module.css";
import Container from "@components/Container/Container";
import Spacer from "@components/Spacer/Spacer";
import BigYellowBtn from "@components/BigYellowBtn/BigYellowBtn";
import { useDisableClickPropagation } from "@utils";
import Tariff from "@components/Tariff/Tariff";
import Paper from "@components/Paper/Paper";
import CircleIcon from "@components/Icons/CircleIcon";
import ApplePay from "@components/Icons/ApplePay";
import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";

const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariff = {
  value: TARIFF_STANDARD, name: "Стандарт", price: 200
}




function OrderDialog() {
  const rootRef = useDisableClickPropagation();

  return (

    <Container ref={rootRef}>

      <Paper>
        <div className={styles.grid}>
        <div>
          <div className={styles.TextField}>
            <CircleIcon />
            <Spacer x={0.5} />
            <p className={styles.text}>улица Пушкина д 8.</p>

          </div>
          <div className={styles.TextField}>
            <CircleIcon color="#F00"/>
            <Spacer x={0.5} />
            <p className={styles.text}>улица Лермонтова д 16.</p>
          </div>
          </div>
          <Spacer flexGrow={1} />
          <div className={styles.paymentMethod}>
          <ApplePay />
        </div>
        </div>
        <Spacer y={2}/>
        

        <div className={styles.buttonField}>
          <Tariff
            name={tariff.name}
            price={tariff.price}
            active={true}
          />
          <Spacer x={2}/>


          <button className={styles.bigWhiteBtn}>Ищем Водителя...</button>
        </div>
        <div className={styles.buttonBottom}>
          <Spacer x={15.5} />{" "}
          <button className={styles.graySmallBtn}>Отменить заказ</button>
        </div>

      </Paper>
    </Container>
  );
}

export default OrderDialog;
