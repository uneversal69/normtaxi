import { useState, Fragment } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";
import styles from "./MainFrom.module.css";
import CloseIcon from "@components/Icons/CloseIcon";
import ApplePay from "@components/Icons/ApplePay";



const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariffList = [
  { value: TARIFF_STANDARD, name: "Стандарт", price: 200 },
  { value: TARIFF_BUSINESS, name: "Бизнес", price: 850 },
];

function MainForm() {
  const [tariff, setTariff] = useState(TARIFF_STANDARD);
  const handleTariffChange = (tariffValue) => {
    setTariff(tariffValue)
  };
  return (
    <>
      <div className="inputmap">
        <TextField />
        <Divider />
        <TextField
          postfix={
            <>
              <Spacer x={0.5} />
              <CloseIcon />
              <Spacer x={1} />
              <Divider variant="vertical" y={3} />
              <Spacer x={1} />
              <button className={styles.mapbutton}>карта</button>
            </>
          }
        />
      </div>{" "}
      <div className="tarifmodal">
        <div className={styles.tariffList}>
          {tariffList.map(({ value, name, price }) => (
            <Fragment key={value}>
              <Tariff
                name={name}
                price={price}
                onClick={() => handleTariffChange(value)}
                active={tariff === value}
              />
              <Spacer x={2} />

            </Fragment>
          ))}
        </div>
        <div className={styles.applediv}><ApplePay/></div>
        <Spacer y={2} />
        <button className={styles.findTaxi}>Заказать</button>
      </div>
    </>
  );
}

export default MainForm;
