const axios = require("axios");
const dotenv = require("dotenv");
const WeatherSummary = require("../models/weatherSummaryModel");

dotenv.config();
const API_KEY = process.env.OPENWEATHER_API_KEY;

const cities = [
  { name: "Delhi", lat: 28.6139, lon: 77.209 },
  { name: "Mumbai", lat: 19.076, lon: 72.8777 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { name: "Hyderabad", lat: 17.385, lon: 78.4867 },
];

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);

const getWeatherData = async () => {
  try {
    // Step 1: Fetch the weather data for each city
    const promises = cities.map((city) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
      )
    );
    const weatherData = await Promise.all(promises);

    // Step 2: Process the weather data for each city
    weatherData.forEach(async (response, index) => {
      const { main, weather } = response.data;
      const tempCelsius = kelvinToCelsius(main.temp);
      const feelsLikeCelsius = kelvinToCelsius(main.feels_like);

      // Step 3: Update the weather data if it exists, or insert if not
      const updatedSummary = await WeatherSummary.findOneAndUpdate(
        { city: cities[index].name },  // Query to find the city in the database
        {
          // The new data to update
          $set: {
            main: weather[0].main,
            temp: tempCelsius,
            feels_like: feelsLikeCelsius,
            max_temp: tempCelsius,  // Update max_temp, min_temp, and average_temp if needed
            min_temp: tempCelsius,
            average_temp: tempCelsius,
            dominant_condition: weather[0].main,
          },
        },
        { new: true, upsert: true }  // Do not insert a new record (upsert is false)
      );

      if (updatedSummary) {
        console.log(`Weather data for ${cities[index].name} updated successfully.`);
      } else {
        console.log(`No data found for ${cities[index].name}.`);
      }
    });
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};

module.exports = { getWeatherData };
