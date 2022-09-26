import { SvgProps } from "react-native-svg";

export interface WeatherProps {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

export interface WeatherInfosProps {
  windSpeed: CommonInfosProps;
  humidity: CommonInfosProps;
  tempMin: CommonInfosProps;
  tempMax: CommonInfosProps;
}

export interface CommonInfosProps {
  icon: JSX.Element;
  value: number;
}

export interface InfoTypeProps {}
