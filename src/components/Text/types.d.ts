import { ReactNode } from "react";
import { TextProps as RnTextProps } from "react-native";

export interface TextProps extends RnTextProps {
  fontSize: string;
  color: string;
  fontWeight: string;
  children: ReactNode;
  lineHeight?: string;
}
