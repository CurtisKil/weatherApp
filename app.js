// Init Weather Class/Object
const weather = new Weather("Riverside");

// Init UI Class
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    // Adding async returns promise so this must be treated as a promise
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
