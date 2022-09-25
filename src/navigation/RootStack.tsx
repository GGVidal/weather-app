import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./types";
import { Weather } from "../screens/Weather";
import { Home } from "../screens/Home";
import { ScrollView } from "react-native";
const Stack = createStackNavigator<RootStack>();

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
