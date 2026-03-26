const API_KEY = import.meta.env.API_KEY;
export const getweather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  const data = await response.json();
  return data;
};
