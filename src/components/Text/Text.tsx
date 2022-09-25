import React, { FC } from "react";
import { StyledText } from "./style";
import { TextProps } from "./types";

export const Text: FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  children,
  lineHeight,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
    >
      {children}
    </StyledText>
  );
};
