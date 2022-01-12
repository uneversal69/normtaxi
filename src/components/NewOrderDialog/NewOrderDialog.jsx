
import styles from "./NewOrderDialog.module.css";
import Container from "@components/Container/Container";
import Spacer from "@components/Spacer/Spacer";
import BigYellowBtn from "@components/BigYellowBtn/BigYellowBtn";
import { useDisableClickPropagation } from "@utils";


function NewOrderDialog({ price, addres, time}) {
  const rootRef = useDisableClickPropagation();

  return (
    <Container ref={rootRef}>
      <div className={styles.head}><p className={styles.nameTextField}>Новый заказ на {price}р</p></div>
      <div className={styles.newAddContent}><div className={styles.grid}>
        <div className={styles.gridItem1}><p className={styles.gridText}>Адрес Отправления</p></div>
        <div className={styles.gridItem2}><p className={styles.gridText}>Время поездки</p></div>
        <div className={styles.gridItem3}>{addres}</div> {/* Достать из функции маин форм адрес отправления */}
        <div className={styles.gridItem4}>{time}~Минут</div>  {/* Из функции оформления заказов достать приблезительное время поезки ???)) как щитать О_о*/}
      </div>
      <Spacer y={2}/>
      <BigYellowBtn namebutton={"Принять"}/>
      </div>
    </Container>
  );
}

export default NewOrderDialog;
