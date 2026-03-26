const API_KEY = "7ce95ef929fc8035a6092b2946f37955";
export const getweather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  const data = await response.json();
  return data;
};
