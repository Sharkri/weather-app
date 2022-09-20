// api key 776fcd1eecdd73f0d7b531362234442a

async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=776fcd1eecdd73f0d7b531362234442a`
  );
  const data = await response.json();
  console.log(data);
}
getWeatherInfo("Hamburg");

export default { getWeatherInfo };
