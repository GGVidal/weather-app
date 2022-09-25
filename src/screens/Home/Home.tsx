import React, { FC } from "react";
import { Text } from "../../components/Text";
import WeatherIcon from "../../assets/WeatherIcon.svg";
import {
  Container,
  ImageContainer,
  TextContainer,
  SubtitleContainer,
} from "./style";

export const Home: FC = () => {
  return (
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
    </Container>
  );
};
