import { LocationGeocodedAddress } from "expo-location";

export interface MapProps {
  latitude: number;
  longitude: number;
  address: LocationGeocodedAddress;
}
