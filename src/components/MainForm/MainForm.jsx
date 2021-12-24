import { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";
import styles from "./MainFrom.module.css";
import CloseIcon from "@components/Icons/CloseIcon";
import ApplePay from "@components/Icons/ApplePay";
import MapButton from "@components/MapButton/MapButton";
import MapPin from "@components/Icons/MapPin";
import { useMapEvents } from "react-leaflet";
import CircleIcon from "@components/Icons/CircleIcon";

const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariffList = [
  { value: TARIFF_STANDARD, name: "Стандарт", price: 200 },
  { value: TARIFF_BUSINESS, name: "Бизнес", price: 850 },
];

const initialValues = {
  from: "",
  to: "",
  tariff: TARIFF_STANDARD,
};

function MainForm() {
  const [selectingOnMap, setSelectionOnMap] = useState(false);
  const [address, setAddress] = useState("Пушкина 23");

  const map = useMapEvents({
    moveend: (e) => {
      const { lat, lng } = e.target.getCenter();
      setAddress(lat && lng ? `${lat} ${lng}` : "fok");
    },
  });

  const onSubmit = async (values) => {
    console.log("создаем заказ, вот данные формы:", values);
  };

  const handleSelectFromOnMap = () => {
    setSelectionOnMap(true);
  };
  const handleCancelSelectOnMap = () => {
    setSelectionOnMap(false);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          {selectingOnMap ? (
            <>
              <button
                className={styles.backBtn}
                type="button"
                onClick={handleCancelSelectOnMap}
              >
                Back
              </button>
              <div className={styles.selectOnMapPin}>
                <MapPin />
              </div>
              <div className={styles.mainForm}>
                <div className={styles.paper}>
                <CircleIcon/>                          
                  {address}
                  <button className={styles.gotoButton} type="button">Поеду отсюда</button>
                </div>
              </div>
            </>
          ) : (
            <div className={`${styles.mainForm} leaflet-control`}>
              <div className={styles.addressBlock}>
                <Field
                  name="from"
                  render={({ input }) => (
                    <TextField
                      inputProps={input}
                      postfix={
                        <>
                          <Spacer x={0.5} />
                          <span onClick={() => input.onChange("")}>
                            <CloseIcon />
                          </span>
                          <Spacer x={1} />
                          <Divider variant="vertical" y={3} />
                          <Spacer x={1} />
                          <MapButton onClick={handleSelectFromOnMap} />
                        </>
                      }
                    />
                  )}
                />
                <Divider />
                <Field
                  name="to"
                  render={({ input }) => (
                    <TextField
                      inputProps={input}
                      postfix={
                        <>
                          <Spacer x={0.5} />
                          <span onClick={() => input.onChange("")}>
                            <CloseIcon />
                          </span>
                          <Spacer x={1} />
                          <Divider variant="vertical" y={3} />
                          <Spacer x={1} />
                          <MapButton />
                        </>
                      }
                    />
                  )}
                />
              </div>
              <Spacer y={2} />
              <div className={styles.paper}>
                <Field
                  name="tariff"
                  render={({ input }) => (
                    <div className={styles.tariffList}>
                      {tariffList.map(({ value, name, price }) => (
                        <Fragment key={value}>
                          <Tariff
                            name={name}
                            price={price}
                            onClick={() => input.onChange(value)}
                            active={values.tariff === value}
                          />
                          <Spacer x={2} />
                        </Fragment>
                      ))}
                      <Spacer x={13} />
                      <div className={styles.applediv}>
                        <Spacer y={3} />
                        <ApplePay />
                      </div>
                    </div>
                  )}
                />
                <Spacer y={2} />
                <button className={styles.findTaxi} type="submit">
                  Заказать
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    />
  );
}

export default MainForm;
