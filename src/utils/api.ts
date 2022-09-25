const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherByLatLong = async (lat?: number, lon?: number) => {
  const latFixed = lat?.toFixed(4);
  const lonFixed = lon?.toFixed(4);
  return fetch(
    `${BASE_URL}/weather?lat=${latFixed}&lon=${lonFixed}&APPID=0eedbaf77cf1febe39c8027572a2e0f7&&units=metric`
  ).then((response) => {
    return response.json();
  });
};
