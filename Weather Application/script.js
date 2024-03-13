const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const getCityCoordinates = () => {
 let cityName = cityInput.value.trim();//Get Your entered city name  and remove extra spaces
 if(!cityName) return;
 console.log(cityName);
}

searchButton.addEventListener("click", getCityCoordinates);