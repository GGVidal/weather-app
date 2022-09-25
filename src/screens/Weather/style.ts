import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 12px;
  margin-left: 16px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 95px;
  margin-bottom: 24px;
  margin-right: 44px;
`;

export const WeatherInfoContainer = styled.View`
  margin-right: 16px;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.36);
  padding: 11px 8px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const WeatherIconContainer = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  margin-right: 8px;
`;
