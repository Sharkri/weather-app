async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=776fcd1eecdd73f0d7b531362234442a&units=imperial`
  );

  const data = await response.json();
  console.log(data);
  if (data.cod !== 200) {
    const error = new Error();
    error.code = data.cod;
    throw error;
  }

  return data;
}

export default getWeatherInfo;
