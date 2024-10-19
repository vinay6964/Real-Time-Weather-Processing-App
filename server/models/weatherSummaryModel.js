// models/weatherSummary.js
const mongoose = require('mongoose');

const weatherSummarySchema = new mongoose.Schema({
  city: String,
  date: {
    type: Date,
    default: Date.now,
  },
  main: String,
  temp: Number,
  feels_like: Number,
  max_temp: Number,
  min_temp: Number,
  average_temp: Number,
  dominant_condition: String,
});

const WeatherSummary = mongoose.model('WeatherSummary', weatherSummarySchema);

module.exports = WeatherSummary;
