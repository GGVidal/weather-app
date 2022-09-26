export const handleWeatherInfo = (info: string, value: number) => {
  let unitValue;
  if (info === "windSpeed") {
    unitValue = "m/s";
  }
  if (info === "humidity") {
    unitValue = "%";
  }
  if (info === "tempMin" || info === "tempMax") {
    unitValue = "°C";
  }
  return `${value} ${unitValue}`;
};
