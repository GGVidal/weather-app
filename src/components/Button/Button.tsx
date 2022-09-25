import React, { FC } from "react";
import { PressableProps } from "react-native";
import { StyledButton } from "./style";

export const Button: FC<PressableProps> = ({ children, onPress }) => {
  return <StyledButton onPress={onPress}>{children}</StyledButton>;
};
