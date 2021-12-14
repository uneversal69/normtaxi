import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import FindMe from "./FindMe";
import FromToForm from "./FromToForm";
import MainForm from "./components/MainForm/MainForm";



const moscowCoords = [55.7520233,37.6153107];



function App() {
  
  console.log("ok");

  return (
    
    <div id="map">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={moscowCoords}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FindMe />
        <FromToForm />
      </MapContainer>
      <MainForm/>
    </div>
  );
}

export default App;


