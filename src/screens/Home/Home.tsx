import React, { FC, useState } from "react";
import { Text } from "../../components/Text";
import WeatherIcon from "../../assets/WeatherIcon.svg";
import {
  ImageContainer,
  Container,
  TextContainer,
  SubtitleContainer,
  BeginButtonContainer,
} from "./style";
import { Button } from "../../components/Button";
import { requestForegroundPermissionsAsync } from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { LinearGradientContainer } from "../../common/style";

export const Home: FC = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { navigate } = useNavigation();
  const askPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permissão negada!");
      return;
    }
    navigate("Weather");
  };

  return (
    <LinearGradientContainer>
      <>
        <Container>
          <ImageContainer>
            <WeatherIcon width={150} height={150} />
          </ImageContainer>
          <TextContainer>
            <Text
              fontSize="28px"
              lineHeight="32px"
              color="#313341"
              fontWeight="500"
            >
              Descubra o clima na sua cidade
            </Text>
            <SubtitleContainer>
              <Text
                fontSize="16px"
                lineHeight="20px"
                color="#9A938C"
                fontWeight="400"
              >
                Veja sua localização no mapa e o clima na região
              </Text>
            </SubtitleContainer>
          </TextContainer>
          <BeginButtonContainer>
            <Button onPress={askPermissions}>
              <Text
                fontSize="20px"
                lineHeight="22px"
                color="#303345"
                fontWeight="600"
              >
                Iniciar
              </Text>
            </Button>
          </BeginButtonContainer>
        </Container>
      </>
    </LinearGradientContainer>
  );
};
