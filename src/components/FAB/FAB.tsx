import React, { FC } from "react";
import { Container } from "./style";
import { Reload } from "../../assets";
import { TouchableOpacityProps } from "react-native";

export const FAB: FC<TouchableOpacityProps> = ({ onPress, testID }) => {
  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <Reload testID={testID} width={25} height={25} />
    </Container>
  );
};
