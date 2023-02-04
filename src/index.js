import { format } from "date-fns";
import getWeatherInfo from "./api";

const search = document.querySelector("#search-input");
const searchButton = document.querySelector(".search-icon");
const temperature = document.querySelector(".temperature");
const location = document.querySelector(".location-info");
const time = document.querySelector(".current-time");
const weather = document.querySelector(".weather");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const pressure = document.querySelector(".pressure");
const tempFeelsLike = document.querySelector(".feels-like");
const weatherImg = document.querySelector(".weather-img");
const forecasts = document.querySelector(".forecasts");
const errorNotFound = document.querySelector(".location-not-found");
const loading = document.querySelector(".loading-container");
const fahrenheitToCelsius = document.querySelector(".fahrenheit-to-celcius");
const refresh = document.querySelector(".refresh");

function getTime(timezone) {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * timezone;
  const cityDate = new Date(cityOffset);
  return cityDate;
}

function setWeatherCard(data) {
  temperature.textContent = `${data.main.temp.toFixed(0)}`;
  tempFeelsLike.textContent = `Feels like ${data.main.feels_like.toFixed(0)}°`;
  time.textContent = format(getTime(data.timezone), "EEEE, h:mm a");
  if (!data.sys.country) location.textContent = data.name;
  else location.textContent = `${data.name}, ${data.sys.country}`;
  weather.textContent = data.weather[0].description;
  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  humidity.textContent = `${data.main.humidity}%`;
  humidity.title = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `${+data.wind.speed.toFixed(1)} mph`;
  pressure.textContent = `${data.main.pressure} hpa`;
}

function createElement(tagName, className, textContent) {
  const elem = document.createElement(tagName);
  elem.textContent = textContent;
  elem.className = className;
  return elem;
}
function setForecasts(data) {
  forecasts.textContent = "";
  for (let i = 0; i < data.list.length; i += 8) {
    const day = format(new Date(data.list[i].dt_txt), "EEEE");
    const temp = data.list[i].main.temp.toFixed(0);
    const feelsLike = `Feels like ${data.list[i].main.feels_like.toFixed(0)}°`;
    const imgElem = createElement("img", "forecast-weather-img");
    imgElem.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;

    const forecast = createElement("div", "forecast");
    forecast.appendChild(createElement("span", "forecast-day", day));
    forecast.appendChild(createElement("h2", "forecast-temp", `${temp}°`));
    forecast.appendChild(createElement("span", "feels-like", feelsLike));
    forecast.appendChild(imgElem);
    forecast.appendChild(
      createElement("span", "weather-desc", data.list[i].weather[0].description)
    );
    forecasts.appendChild(forecast);
  }
}

async function searchLocation(query) {
  if (!query) return;

  const { unitType } = document.querySelector(".active").dataset;

  loading.classList.add("loading");
  // Hide error message
  errorNotFound.classList.remove("active");
  // Clear and unfocus search input
  search.value = "";
  search.blur();
  try {
    const [data, forecast] = await Promise.all([
      getWeatherInfo(query, { infoType: "weather", unitType }),
      getWeatherInfo(query, { infoType: "forecast", unitType }),
    ]);
    setWeatherCard(data);
    setForecasts(forecast);
  } catch (error) {
    if (error.code === "404") errorNotFound.classList.add("active");
    // else unknown error
    else console.error(error);
  }
  loading.classList.remove("loading");
}

const refreshLocation = () => searchLocation(location.textContent);

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchLocation(search.value);
});

searchButton.addEventListener("click", () => searchLocation(search.value));
document.addEventListener("keyup", (e) => {
  if (e.key === "/") search.focus();
});

fahrenheitToCelsius.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;

  const { unitType } = e.target.dataset;
  // make sure it is unit convert button
  if (unitType !== "imperial" && unitType !== "metric") return;

  // remove currently active and add active to the new
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // re-query for location with new unit type active
  refreshLocation();
});

refresh.addEventListener("click", refreshLocation);

// Initial Load
searchLocation("Antarctica");
