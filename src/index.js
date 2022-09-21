import { format } from "date-fns";
import getWeatherInfo from "./api";

const search = document.querySelector("#search-input");
const temperature = document.querySelector(".temperature");
const location = document.querySelector(".location-info");
const time = document.querySelector(".current-time");
const weather = document.querySelector(".weather");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const pressure = document.querySelector(".pressure");
const errorNotFound = document.querySelector(".location-not-found");
const searchButton = document.querySelector(".search-icon");
function getTime(timezone) {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * timezone;
  const cityDate = new Date(cityOffset);
  return format(cityDate, "EEEE, h:mm a");
}

function setWeatherInfo(data) {
  temperature.textContent = `${data.main.temp.toFixed(0)}°`;
  time.textContent = getTime(data.timezone);
  location.textContent = data.name;
  weather.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  humidity.title = `Humidity: ${data.main.humidity}`;
  windSpeed.textContent = `${data.wind.speed} mph`;
  pressure.textContent = `${data.main.pressure} hpa`;
}

async function searchLocation(query) {
  try {
    const data = await getWeatherInfo(query);
    // Hide error message
    errorNotFound.classList.remove("active");
    // Clear and unfocus search input
    search.value = "";
    search.blur();

    setWeatherInfo(data);
  } catch (error) {
    if (error.code === "404") errorNotFound.classList.add("active");
    // else unknown error
    else console.error(error);
  }
}

search.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (!search.value) return;
  searchLocation(search.value);
});

searchButton.addEventListener("click", () => searchLocation(search.value));

// Initial Load
searchLocation("London");
