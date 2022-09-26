import { ReactNode } from "react";

export interface WeatherInfoItemProps {
  icon: ReactNode;
  infoName: string;
  infoType: string;
  value: number;
}
