import React, { FC } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {
  LocationGeocodedAddress,
  LocationObject,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  useForegroundPermissions,
} from "expo-location";
import { LinearGradientContainer } from "../../common/style";
import { Container } from "./style";
import { Text } from "../../components/Text";

export const Weather: FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<LocationGeocodedAddress[]>();
  const [, requestPermission] = useForegroundPermissions();
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (granted) {
        const locationCoord = await getCurrentPositionAsync();
        setLocation(locationCoord);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (location) {
        let cityLocation = await reverseGeocodeAsync({
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
        });
        console.log(cityLocation);
        if (cityLocation) {
          setAddress(cityLocation);
        }
      }
    })();
  }, [location]);
  console.log("GG", location);
  const { city = {}, country = {} } = address[0];
  return (
    <LinearGradientContainer>
      <>
        <Container>
          <Text fontSize="24px" color="#313341" fontWeight="500">
            {address[0] && `${city},\n${country}`}
          </Text>
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
        </Container>
      </>
    </LinearGradientContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});

// -5.208086128097803, -37.33013351542919
