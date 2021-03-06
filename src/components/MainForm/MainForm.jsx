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
import BigYellowBtn from "@components/BigYellowBtn/BigYellowBtn";
import { geocodeReverseUri, useApi } from "@modules/api";

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
  const [selectingOnMap, setSelectionOnMap] = useState(null);
  const [address, setAddress] = useState("Пушкина 23");
  const [{ loading }, refetch, cancel] = useApi(
    { method: "GET" },
    { manual: true }
  );

  useMapEvents({
    // const map =
    moveend: async (e) => {
      cancel();
      const { lat, lng } = e.target.getCenter();
      let newAddress = "Не удалось определить адрес";
      // lat && lng ?
      const { data } = await refetch({ url: geocodeReverseUri({ lat, lng }) });
      if (
        data &&
        data.success &&
        data.geodata &&
        data.geodata.results.length > 0
      ) {
        console.log(data.geodata);
        const {
          components: { road, house_number },
        } = data.geodata.results[0];
        newAddress = `${road} ${house_number ?? ""}`;
      }
      setAddress(newAddress);
    },
  });

  const onSubmit = async (values) => {
    console.log("создаем заказ, вот данные формы:", values);
  };

  const handleSelectFromOnMap = (field) => {
    setSelectionOnMap(field);
  };
  const handleCancelSelectOnMap = () => {
    setSelectionOnMap(null);
  };

  const handleSetFrom = (formChange) => {
    formChange(selectingOnMap, address);
    setSelectionOnMap(null);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({
        handleSubmit,
        form: { change },
        submitting,
        pristine,
        values,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          {selectingOnMap ? (
            <>
              <MapButton
                className={styles.backBtn}
                onClick={handleCancelSelectOnMap}
              >
                ⬅️
              </MapButton>
              <div className={styles.selectOnMapPin}>
                <MapPin />
              </div>
              <Container>
                <div className={styles.paper}>
                  <CircleIcon />
                  <Spacer x={1} display="inline-block" />
                  {loading ? "..." : address}
                  <button
                    className={styles.bigYellowBtn}
                    type="button"
                    onClick={() => handleSetFrom(change)}
                  >
                    Поеду {selectingOnMap === "from" ? "отсюда" : "сюда"}
                  </button>
                </div>
              </Container>
            </>
          ) : (
            <Container className="leaflet-control">
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
                          <TextButton
                            onClick={() => handleSelectFromOnMap("from")}
                          >
                            Карта
                          </TextButton>
                        </>
                      }
                    />
                  )}
                />
                <Spacer y={0.5} />
                <Divider />
                <Spacer y={0.5} />
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
                          <TextButton
                            onClick={() => handleSelectFromOnMap("to")}
                          >
                            Карта
                          </TextButton>
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
                      <Spacer flexGrow={1} />
                      <div className={styles.paymentMethod}>
                        <ApplePay />
                      </div>
                    </div>
                  )}
                />
                <Spacer y={2} />
                <BigYellowBtn>Заказать</BigYellowBtn>
              </div>
            </Container>
          )}
        </form>
      )}
    />
  );
}

export default MainForm;
