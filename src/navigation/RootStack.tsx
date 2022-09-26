import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./types";
import { Weather } from "../screens/Weather";
import { Home } from "../screens/Home";
const Stack = createStackNavigator<RootStack>();
import { navigationConfig } from "./config";

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={navigationConfig} component={Home} />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={navigationConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
