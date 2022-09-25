import React, { FC } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LocationGeocodedAddress, LocationObject } from "expo-location";

export const Weather: FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  const [city, setCity] = useState<LocationGeocodedAddress[]>();
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
  useEffect(() => {
    (async () => {
      if (location) {
        let cityLocation = await Location.reverseGeocodeAsync({
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
        });
        console.log(cityLocation);
        if (cityLocation) {
          setCity(cityLocation);
        }
      }
    })();
  }, [location]);
  console.log("GG", location);
  return (
    <View style={styles.container}>
      {location && (
        <MapView
          region={{
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
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

// -5.208086128097803, -37.33013351542919
