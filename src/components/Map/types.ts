import { LocationGeocodedAddress } from "expo-location";
import { LatLng } from "react-native-maps";

export interface MapProps {
  latitude: number;
  longitude: number;
  address: LocationGeocodedAddress;
}
