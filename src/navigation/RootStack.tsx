import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack, StackRoutes } from "./types";
import { Weather } from "../screens/Weather";
import { Home } from "../screens/Home";
const {Navigator, Screen} = createStackNavigator<RootStack>();
import { navigationConfig } from "./config";

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name={StackRoutes.HOME} options={navigationConfig} component={Home} />
        <Screen
          name={StackRoutes.WEATHER}
          component={Weather}
          options={navigationConfig}
        />
      </Navigator>
    </NavigationContainer>
  );
};
