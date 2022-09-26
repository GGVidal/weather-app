import React, { FC } from "react";
import { StyledText } from "./style";
import { TextProps } from "./types";

export const Text: FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  children,
  lineHeight,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </StyledText>
  );
};
