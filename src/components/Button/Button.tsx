import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { StyledButton } from "./style";

export const Button: FC<TouchableOpacityProps> = ({
  children,
  onPress,
  testID,
}) => {
  return (
    <StyledButton testID={testID} onPress={onPress}>
      {children}
    </StyledButton>
  );
};
