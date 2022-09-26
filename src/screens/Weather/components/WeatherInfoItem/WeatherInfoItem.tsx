import React, { FC } from "react";
import { WeatherInfoContainer, WeatherIconContainer } from "./style";
import { WeatherInfoItemProps } from "./types";
import { Text } from "../../../../components/Text";
import { handleWeatherInfo } from "../../../../utils/weather";

export const WeatherInfoItem: FC<WeatherInfoItemProps> = ({
  icon,
  infoType,
  infoName,
  value,
}) => {
  return (
    <WeatherInfoContainer>
      <WeatherIconContainer>{icon}</WeatherIconContainer>
      <Text fontSize="12px" color="#303345" fontWeight="300">
        {infoName}
      </Text>
      <Text fontSize="12px" color="#303345" fontWeight="300">
        {handleWeatherInfo(infoType, value)}
      </Text>
    </WeatherInfoContainer>
  );
};
