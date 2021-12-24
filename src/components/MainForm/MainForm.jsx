import { Fragment } from "react";
import { Form, Field } from 'react-final-form';
import Divider from "@components/Divider/Divider";
import Spacer from "@components/Spacer/Spacer";
import Tariff from "@components/Tariff/Tariff";
import TextField from "@components/TextField/TextField";
import styles from "./MainFrom.module.css";
import CloseIcon from "@components/Icons/CloseIcon";
import ApplePay from "@components/Icons/ApplePay";
import MapButton from "@components/MapButton/MapButton";
import FindButton from "@components/FindButton/FindButton";



const TARIFF_STANDARD = "standard";
const TARIFF_BUSINESS = "business";
const tariffList = [
  { value: TARIFF_STANDARD, name: "Стандарт", price: 200 },
  { value: TARIFF_BUSINESS, name: "Бизнес", price: 850 },
];

const initialValues = {
  from: '',
  to: '',
  tariff: TARIFF_STANDARD,
};

function MainForm() {
  
  const onSubmit = async (values) => {
    console.log('создаем заказ, вот данные формы:', values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputmap}>
            <Field
              name="from"
              render={({ input }) => (
                <TextField
                  inputProps={input}
                  postfix={
                    <>
                      <Spacer x={0.5} />
                      <span onClick={() => input.onChange('')}><CloseIcon /></span>
                      <Spacer x={1} />
                      <Divider variant="vertical" y={3} />
                      <Spacer x={1} />
                      <MapButton/>
                    </>
                  }
                />
              )} />
            <Divider />
            <Field
              name="to"
              render={({ input }) => (
                <TextField
                  inputProps={input}
                  postfix={
                    <>
                      <Spacer x={0.5} />
                      <span onClick={() => input.onChange('')}><CloseIcon /></span>
                      <Spacer x={1} />
                      <Divider variant="vertical" y={3} />
                      <Spacer x={1} />
                      <MapButton/>
                    </>
                  }
                />
              )} />
          </div>{" "}
          <div className="tarifmodal">
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
                  <div className={styles.applediv} ><Spacer y={3} /><ApplePay /></div>
                </div>
              )} />
            <Spacer y={2} />
            <button className={styles.findTaxi} type="submit">Заказать</button>
          </div>
        </form>
      )} />
  );
}

export default MainForm;
