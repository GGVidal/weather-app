import { WeatherInfosProps } from "../common/types/weather";
import { Humidity, Wind } from "../assets";

export const handleWeatherInfo = (info: string, value: number) => {
  let unitValue;
  if (info === "windSpeed") {
    unitValue = "m/s";
  }
  if (info === "humidity") {
    unitValue = "%";
  }
  if (info === "tempMin" || info === "tempMax") {
    unitValue = "°C";
  }
  return `${value} ${unitValue}`;
};

export const getWeatherInfoObject = (
  humidity: number,
  windSpeed: number,
  tempMin: number,
  tempMax: number
): WeatherInfosProps => {
  return {
    windSpeed: {
      value: Math.round(windSpeed),
      icon: getIconByWeatherType("windSpeed"),
    },
    humidity: {
      value: Math.round(humidity),
      icon: getIconByWeatherType("humidity"),
    },
    tempMax: {
      value: Math.round(tempMax),
      icon: getIconByWeatherType("windSpeed"),
    },
    tempMin: {
      value: Math.round(tempMin),
      icon: getIconByWeatherType("windSpeed"),
    },
  };
};

const getIconByWeatherType = (type: string): JSX.Element => {
  const iconsObject = {
    windSpeed: <Wind width={35} height={35} />,
    humidity: <Humidity width={35} height={35} />,
    tempMax: <Wind width={35} height={35} />,
    tempMin: <Wind width={35} height={35} />,
  };
  return iconsObject[type];
};
