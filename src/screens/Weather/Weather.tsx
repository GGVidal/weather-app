import React, { FC } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

export const Weather: FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locationCoord = await Location.getCurrentPositionAsync();
      setLocation(locationCoord);
    })();
  }, []);
  console.log("GG", location);
  return (
    <View style={styles.container}>
      {location && (
        <MapView
          initialRegion={{
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker
            title="My Location"
            description="My location"
            coordinate={{
              latitude: location.coords?.latitude,
              longitude: location.coords?.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
