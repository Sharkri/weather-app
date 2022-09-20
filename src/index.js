import { format } from "date-fns";
import getWeatherInfo from "./api";

const search = document.querySelector("#search-input");
const temperature = document.querySelector(".temperature");
const location = document.querySelector(".location-info");
const time = document.querySelector(".current-time");
const kelvinToFahrenheit = (k) => ((k - 273.15) * 9) / 5 + 32;

function getTime(timezone) {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * timezone;
  const cityDate = new Date(cityOffset);
  return format(cityDate, "EEEE, h:mm a");
}

search.addEventListener("keydown", (e) => {
  if (!e.key === "Enter") return;
  // if key is enter show weather stuff
  getWeatherInfo(search.value).then((data) => {
    // Clear search
    search.value = "";
    search.blur();
    const convertedTemp = kelvinToFahrenheit(data.main.temp);
    time.textContent = getTime(data.timezone);
    temperature.textContent = `${convertedTemp.toFixed(0)}°`;
    location.textContent = data.name;
  });
});
