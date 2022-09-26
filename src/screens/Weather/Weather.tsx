import React, { FC, useCallback } from "react";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import {
  LocationGeocodedAddress,
  LocationObject,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  useForegroundPermissions,
} from "expo-location";
import { LinearGradientContainer } from "../../common/style";
import {
  CelsiusContainer,
  Container,
  LocationContainer,
  TemperatureContainer,
  TemperatureIconContainer,
} from "./style";
import { Text } from "../../components/Text";
import { fetchWeatherByLatLong } from "../../utils/api";
import {
  WeatherInfosProps,
  WeatherProps,
  CommonInfosProps,
} from "../../common/types/weather";
import { WeatherInfosEnum } from "../../common/types/enum";
import { Humidity, Wind } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";
import { Map } from "../../components/Map";
import { WeatherInfoItem } from "./components/WeatherInfoItem";
import { getWeatherInfoObject } from "../../utils/weather";

export const Weather: FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [address, setAddress] = useState<LocationGeocodedAddress[]>();
  const [weatherData, setWeatherData] = useState<WeatherProps>();
  const [, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (granted) {
        const locationCoord = await getCurrentPositionAsync();
        setLocation(locationCoord);
        if (locationCoord) {
          let cityLocation = await reverseGeocodeAsync({
            latitude: locationCoord?.coords.latitude,
            longitude: locationCoord?.coords.longitude,
          });
          if (cityLocation) {
            setAddress(cityLocation);
          }
        }
      }
    })();
  }, []);
  useEffect(() => {
    if (location) {
      fetchWeatherByLatLong(
        location?.coords.latitude,
        location?.coords.longitude
      )
        .then((json) => setWeatherData(json))
        .catch((err: TypeError) => console.log(err));
    }
  }, [location]);

  const renderText = useCallback(() => {
    if (address?.length) {
      return (
        <Text fontSize="24px" color="#313341" fontWeight="500">
          {`${address[0]?.city},\n${address[0]?.country}`}
        </Text>
      );
    }
  }, [address]);

  const renderWeatherIcon = useCallback(() => {
    if (weatherData) {
      console.log("gg weather data", weatherData);
      const { weather } = weatherData;
      const { icon } = weather[0];
      return (
        <TemperatureIconContainer>
          <Image
            style={{ width: 120, height: 120 }}
            source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
          />
        </TemperatureIconContainer>
      );
    }
  }, [weatherData]);

  const renderWeatherInfo = useCallback(() => {
    if (weatherData) {
      const {
        wind: { speed },
        main: { temp_max: tempMax, humidity: humidityInfo, temp_min: tempMin },
      } = weatherData;
      const weatherInfos = getWeatherInfoObject(
        humidityInfo,
        speed,
        tempMin,
        tempMax
      );
      const weatherKeys: string[] = Object.keys(weatherInfos);
      return weatherKeys.map((info: string, index) => {
        const weatherObj: CommonInfosProps = weatherInfos[info];
        return (
          <WeatherInfoItem
            key={index}
            icon={weatherObj.icon}
            infoType={info}
            infoName={WeatherInfosEnum[info]}
            value={weatherObj.value}
          />
        );
      });
    }
  }, [weatherData]);

  return (
    <LinearGradientContainer>
      <ScrollView bounces={false}>
        <Container>
          {!!address && renderText()}
          {weatherData && (
            <>
              <TemperatureContainer>
                {renderWeatherIcon()}
                <CelsiusContainer>
                  <Text fontSize="53px" color="#303345" fontWeight="700">
                    {Math.round(weatherData.main.temp)}
                  </Text>
                  <Text fontSize="12px" color="#303345" fontWeight="400">
                    {`°C`}
                  </Text>
                </CelsiusContainer>
              </TemperatureContainer>
              {renderWeatherInfo()}
            </>
          )}
          {location && !!address && (
            <LocationContainer>
              <Text fontSize="30px" color="#303345" fontWeight="700">
                Minha Localização
              </Text>
              <Text
                fontSize="12px"
                lineHeight="20px"
                color="#9A938C"
                fontWeight="400"
              >
                Clique no marcador
              </Text>
              <Map
                address={address[0]}
                latitude={location.coords?.latitude}
                longitude={location.coords?.longitude}
              />
            </LocationContainer>
          )}
        </Container>
      </ScrollView>
    </LinearGradientContainer>
  );
};
