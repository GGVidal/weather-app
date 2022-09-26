import React, { FC } from "react";
import { Container } from "./style";
import { Reload } from "../../assets";
import { TouchableOpacityProps } from "react-native";

export const FAB: FC<TouchableOpacityProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <Reload width={25} height={25} />
    </Container>
  );
};
