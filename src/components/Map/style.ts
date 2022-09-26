import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const MapContainer = styled(MapView)`
  width: ${Dimensions.get("window").width - 30}px;
  height: ${Dimensions.get("window").height / 2}px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 10px;
`;
