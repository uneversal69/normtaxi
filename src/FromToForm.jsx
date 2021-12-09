import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

const FromToForm = () => {
  const map = useMap();

  useEffect(() => {
    L.Routing.control({
      waypoints: [], // L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)
      lineOptions: {
        addWaypoints: false,
      },
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);
  }, []);

  return <></>;
};

export default FromToForm;
