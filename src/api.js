async function getWeatherInfo(location, settings = {}) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/${
      settings.infoType || "weather"
    }?q=${location}&APPID=776fcd1eecdd73f0d7b531362234442a&units=${
      settings.unitType || "imperial"
    }`
  );
  const data = await response.json();
  if (Number(data.cod) !== 200) {
    const error = new Error();
    error.code = data.cod;
    throw error;
  }
  return data;
}

export default getWeatherInfo;
