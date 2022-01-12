import L from "leaflet";
import { useEffect, useRef } from "react";

// просто для примера как можно получить локацию пользователя
export const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => resolve(false)
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
};

export const useDisableClickPropagation = () => {
  const rootRef = useRef(null);
  useEffect(() => {
    L.DomEvent.disableClickPropagation(rootRef.current);
  });
  return rootRef;
};
