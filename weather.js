// For Weather API Requests
class Weather {
  constructor(city, country) {
    this.apiKey = "c1fcb765d13406959727af43d7a442f8";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
