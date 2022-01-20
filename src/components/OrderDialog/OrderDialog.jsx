import styles from "./OrderDialog.module.css";
import Container from "@components/Container/Container";
import Spacer from "@components/Spacer/Spacer";
import BigYellowBtn from "@components/BigYellowBtn/BigYellowBtn";
import { useDisableClickPropagation } from "@utils";
import Tariff from "@components/Tariff/Tariff";
import Paper from "@components/Paper/Paper";
import CircleIcon from "@components/Icons/CircleIcon";
import ApplePay from "@components/Icons/ApplePay";
import { Fragment, useLayoutEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import Timer from "@components/Timer/Timer";

const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariff = {
  value: TARIFF_STANDARD,
  name: "Стандарт",
  price: 200,
};

const STATUS_SEARCHING = "STATUS_SEARCHING";
const STATUS_COMING = "STATUS_COMING";
const STATUS_WAITING = "STATUS_WAITING";
const STATUS_GOING = "STATUS_GOING";
const statuses = {
  [STATUS_SEARCHING]: () => "Ищем водителя...",
  [STATUS_COMING]: (minutes) => `Водитель прибудет через ${minutes} минут`,
  [STATUS_WAITING]: () => "Водитель на месте",
  [STATUS_GOING]: () => "В пути",
};

const mutedStatuses = [STATUS_WAITING, STATUS_GOING];
const cancelableStatuses = [STATUS_SEARCHING, STATUS_COMING];

const comingMinutes = 10;
const goingMinutes = 15;

function OrderDialog() {
  const rootRef = useDisableClickPropagation();
  const [status, setStatus] = useState(STATUS_SEARCHING);

  function handleToggleStatus() {
    // TODO
    setStatus((prev) => {
      const currentIndex = Object.keys(statuses).findIndex(
        (item) => item === prev
      );
      return currentIndex === Object.keys(statuses).length - 1
        ? Object.keys(statuses)[0]
        : Object.keys(statuses)[currentIndex + 1];
    });
  }

  useLayoutEffect(() => {});

  return (
    <Container ref={rootRef}>
      <Paper>
        <div className={styles.grid}>
          <div>
            <div className={styles.address}>
              <CircleIcon />
              <Spacer x={0.5} />
              <p className={styles.text}>улица Пушкина д 8.</p>
            </div>
            <div className={styles.address}>
              <CircleIcon color="#F00" />
              <Spacer x={0.5} />
              <p className={styles.text}>улица Лермонтова д 16.</p>
            </div>
          </div>
          <Spacer flexGrow={1} />
          <div className={styles.paymentMethod}>
            <ApplePay />
          </div>
        </div>
        <Spacer y={2} />

        <div className={styles.flex}>
          <Tariff name={tariff.name} price={tariff.price} active={true} />
          <Spacer x={2} />
          <BigYellowBtn
            variant={mutedStatuses.includes(status) ? "muted" : "outlined"}
            onClick={handleToggleStatus}
            style={{ flexGrow: 1 }}
          >
            {statuses[status](comingMinutes)}
          </BigYellowBtn>
          {status === STATUS_WAITING && (
            <>
              <Spacer x={2} />
              <BigYellowBtn variant="outlined" className={styles.timer}>
                <div className={styles.timer__label}>Ожидание</div>
                <Timer className={styles.timer__clock} />
              </BigYellowBtn>
            </>
          )}
          {status === STATUS_GOING && (
            <>
              <Spacer x={2} />
              <BigYellowBtn variant="outlined" className={styles.timer}>
                <div className={styles.timer__label}>Прибытие</div>
                <Timer
                  className={styles.timer__clock}
                  countdown={goingMinutes * 60}
                />
              </BigYellowBtn>
            </>
          )}
        </div>
        {cancelableStatuses.includes(status) && (
          <>
            <Spacer y={2} />
            <div className={styles.cancelOrder}>
              <button className={styles.graySmallBtn}>Отменить заказ</button>
            </div>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default OrderDialog;
