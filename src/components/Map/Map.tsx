import React, { FC } from "react";
import { Marker } from "react-native-maps";
import { MapProps } from "./types";
import { MapContainer } from "./style";

const DELTA_VALUE = 0.1;

export const Map: FC<MapProps> = ({
  latitude,
  longitude,
  address: { city, district, street, streetNumber },
}) => {
  const coordObj = {
    latitude,
    longitude,
    city: "",
    district: "",
    street: "",
    streetNumber: "",
  };
  return (
    <MapContainer
      zoomControlEnabled={true}
      scrollDuringRotateOrZoomEnabled
      zoomTapEnabled
      region={{
        ...coordObj,
        latitudeDelta: DELTA_VALUE,
        longitudeDelta: DELTA_VALUE,
      }}
    >
      <Marker
        title={`${city}, ${district}`}
        description={`${street}, ${streetNumber}`}
        coordinate={coordObj}
      />
    </MapContainer>
  );
};
