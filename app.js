// Init Weather Class/Object
const weather = new Weather("Riverside");

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    // Adding async returns promise so this must be treated as a promise
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
