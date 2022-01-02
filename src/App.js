import "./App.css";
// import L from 'leaflet';
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import FromToForm from "./FromToForm";
import MainForm from "./components/MainForm/MainForm";
import LoginForm from "./components/LoginForm/LoginForm";
import FindMe from "@components/FindMe/FindMe";

const moscowCoords = [55.7520233, 37.6153107];

function App() {
  console.log("ok");

  const initMap = (map) => {
    // раскомментить чтобы добавить кнопки зума
    /* L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map); */
  };

  return (
    <div id="map">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={moscowCoords}
        zoom={13}
        scrollWheelZoom={true}
        whenCreated={initMap}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FindMe />
        <FromToForm />
        <LoginForm/>
      </MapContainer>
    </div>
  );
}

export default App;
