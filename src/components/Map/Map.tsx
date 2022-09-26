import React, { FC } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapProps } from "./types";

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
    <MapView
      region={{
        ...coordObj,
        latitudeDelta: DELTA_VALUE,
        longitudeDelta: DELTA_VALUE,
      }}
      style={styles.map}
    >
      <Marker
        title={`${city}, ${district}`}
        description={`${street}, ${streetNumber}`}
        coordinate={coordObj}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").height / 2,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 40,
    // marginRight: Dimensions.get("window").width / 2,
  },
});
