import React, { FC, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions, Image } from "react-native";
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
  TemperatureContainer,
  TemperatureIconContainer,
  WeatherIconContainer,
  WeatherInfoContainer,
} from "./style";
import { Text } from "../../components/Text";
import { fetchWeatherByLatLong } from "../../utils/api";
import { WeatherInfosProps, WeatherProps } from "../../common/types/weather";
import { WeatherInfosEnum } from "../../common/types/enum";
import { Humidity, Wind } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";

export const Weather: FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [address, setAddress] = useState<LocationGeocodedAddress[]>();
  const [weatherData, setWeatherData] = useState<WeatherProps>();
  const [, requestPermission] = useForegroundPermissions();

  const handleWeatherInfo = (info: string, value: number) => {
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
    if (address[0]) {
      return (
        <Text fontSize="24px" color="#313341" fontWeight="500">
          {`${address[0]?.city},\n${address[0]?.country}`}
        </Text>
      );
    }
  }, [address]);

  const renderWeatherIcon = useCallback(() => {
    if (weatherData) {
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
      const weatherInfos: WeatherInfosProps = {
        windSpeed: {
          icon: <Wind width={35} height={35} />,
          value: Math.round(speed),
        },
        humidity: {
          icon: <Humidity width={35} height={35} />,
          value: Math.round(humidityInfo),
        },
        tempMin: {
          icon: <Wind width={35} height={35} />,
          value: Math.round(tempMin),
        },
        tempMax: {
          icon: <Wind width={35} height={35} />,
          value: Math.round(tempMax),
        },
      };
      const weatherKeys: string[] = Object.keys(weatherInfos);
      return weatherKeys.map((info: string, index) => {
        return (
          <WeatherInfoContainer key={index}>
            <WeatherIconContainer>
              {weatherInfos[info].icon}
            </WeatherIconContainer>
            <Text fontSize="12px" color="#303345" fontWeight="300">
              {WeatherInfosEnum[info]}
            </Text>
            <Text fontSize="12px" color="#303345" fontWeight="300">
              {handleWeatherInfo(info, weatherInfos[info].value)}
            </Text>
          </WeatherInfoContainer>
        );
      });
    }
  }, [weatherData]);

  return (
    <LinearGradientContainer>
      <ScrollView>
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
          {location && (
            <MapView
              region={{
                latitude: location.coords?.latitude,
                longitude: location.coords?.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              style={styles.map}
            >
              <Marker
                title="My Location"
                description="My location"
                coordinate={{
                  latitude: location.coords?.latitude,
                  longitude: location.coords?.longitude,
                }}
              />
            </MapView>
          )}
        </Container>
      </ScrollView>
    </LinearGradientContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});
