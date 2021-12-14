import React from "react";
import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import svg from "./svg1";
import svg1 from "./svg2";

//const TARIFF_STANDARD = "standard";
//const TARIFF_BUSINESS = "business";
//const [tariff, setTariff] = useState(TARIFF_STANDARD);
const pricestandart = 280



function SearchFrom(){
  
  return (<><div className="inputmap">
  <input className="inputtext1" type="text"  />
  <div className="inputmapbutton"><input className="inputtext2" type="text"  />
  <button className="mapbutton">карта</button></div>
</div> <div  className="tarifmodal">
  <div className="standart" ><p slassName="texttarif">Стандарт</p><p slassName="price">{pricestandart}Р</p>
  </div>
  <div className="business" ></div>
  <button className="findTaxi">Заказать</button>
</div></>)
}

export default SearchFrom;