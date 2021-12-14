import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";

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
              <Spacer x={1} />
              <Divider variant="vertical" y={3} />
              <Spacer x={1} />
              <button className="mapbutton">карта</button>
            </>
          }
        />
      </div>{" "}
      <div className="tarifmodal">
        <div>
          {tariffList.map(({ value, name, price }) => (
            <Tariff
              key={value}
              name={name}
              price={price}
              onClick={() => handleTariffChange(value)}
              active={tariff === value}
            />
          ))}
        </div>
        <button className="findTaxi">Заказать</button>
      </div>
    </>
  );
}

export default MainForm;
