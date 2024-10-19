// src/pages/MetroCities.js
import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";

const MetroCities = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("/api/weather");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const errorText = await response.text();
          throw new Error(`Expected JSON, but received HTML: ${errorText}`);
        }

        const jsonData = await response.json();
        console.log("🚀 ~ fetchWeatherData ~ weatherData:", jsonData);
        setWeatherData(jsonData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Metro Cities Weather
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.map((weather) => (
          <WeatherCard key={weather._id} data={weather} threshold={10} />
        ))}
      </div>
    </div>
  );
};

export default MetroCities;
