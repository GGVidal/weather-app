import React, { FC } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapProps } from "./types";

const DELTA_VALUE = 0.1;

export const Map: FC<MapProps> = ({ latitude, longitude }) => {
  const coordObj = {
    latitude,
    longitude,
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
        title="My Location"
        description="My location"
        coordinate={coordObj}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
