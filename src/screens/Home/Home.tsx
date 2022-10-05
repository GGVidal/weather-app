import React, { FC } from "react";
import { Text } from "../../components/Text";
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
import { WeatherIcon } from "../../assets";
import { Alert, ScrollView } from "react-native";
import { StackRoutes } from "../../navigation/types";

export const Home: FC = () => {
  const { navigate } = useNavigation()
  const askPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Localização", "Por favor permitir o acesso a localização", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
      return;
    }
    navigate(StackRoutes.WEATHER);
  };

  return (
    <LinearGradientContainer>
      <ScrollView>
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
            <Button testID="button-permission" onPress={askPermissions}>
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
      </ScrollView>
    </LinearGradientContainer>
  );
};
