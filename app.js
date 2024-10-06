const apiKey = "04714d4f9062074e1734bbafdc330dfe";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather? &units=metric&q=paris";

let inpUser = document.getElementById("input");

inpUser.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  if (inpUser.value.length < 1) {
    alert("Please enter a city name");
  } else {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather? &units=metric&q=${inpUser.value}`;
    getDataWeather();
  }
}

async function getDataWeather() {
  response = await fetch(apiUrl + `&appid=${apiKey}`);
  data = await response.json();
  console.log(data);
  console.log(data.weather.main);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".weather-icon").src = `images/${
    data.weather[data.weather.length - 1].main.toLowerCase()
  }.png`;
  document.querySelector(".country").innerHTML = data.sys.country;
}

document.querySelector(img).src.toLowerCase();

getDataWeather();
