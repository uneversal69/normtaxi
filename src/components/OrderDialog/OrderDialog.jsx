
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
import TimerComp from "@components/TimerComp/TimerComp";

const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariff = {
  value: TARIFF_STANDARD, name: "Стандарт", price: 200
}
const stateButton = [
  {id : "01",text : "Ищем водителя.." , setState : "one"},
{id : "02" ,text : `Водитель прибудет через ${55} минут` , setState : "two"},
{id : "03" ,text : `Осталось ехать ${78} минут` , setState : "tre"},
];



function OrderDialog({timeToGo, timeToRoad }) {
  const rootRef = useDisableClickPropagation();
  const [name, setName] = useState('Ищем водителя');
  const [displayTimer, setDisplayTimer] = useState(true);
const showTimer = () => setDisplayTimer(true); 
const hideTimer = () => setDisplayTimer(false);

  
 function clickButton() { 
    let buttonName = stateButton.find(item => item.id == 2); {/* вот тут достаёться из обьекта по айди */}
    setName(buttonName.text);
    hideTimer();
    
 }

    
  
  
  
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

           <div className={styles.stateForm} hidden = {displayTimer}>Водитель наместе</div>
          <button className={styles.bigWhiteBtn} onClick={clickButton}>{name}</button>
          <TimerComp name={"Ожидание"} time={"00:05"} hidden = {displayTimer} />
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
