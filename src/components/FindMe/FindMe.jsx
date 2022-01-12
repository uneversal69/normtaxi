import MapButton from "@components/MapButton/MapButton";
import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useDisableClickPropagation } from "@utils";
import styles from "./FindMe.module.css";

const FindMe = () => {
  const rootRef = useDisableClickPropagation();

  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    /* click() {
      map.locate();
    }, */
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      console.log(position);
    },
  });
  const handleFindMe = async () => {
    map.locate();
  };
  return (
    <>
      <MapButton ref={rootRef} className={styles.findMe} onClick={handleFindMe}>
        📍
      </MapButton>
      {position ? (
        <Marker position={position}>
          <Popup>Я здесь</Popup>
        </Marker>
      ) : null}
    </>
  );
};
export default FindMe;
