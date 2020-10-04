const storage = new Storage();
// Get stored location data
const weathLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weathLocation.city, weathLocation.country);

// Init UI Class
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  //   Change Location
  weather.changeLocation(city, country);

  //   Set Location in LS
  storage.setLocationData(city, country);

  // Get & re-display new location's weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    // Adding async returns promise so this must be treated as a promise
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
