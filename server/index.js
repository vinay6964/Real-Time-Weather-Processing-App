const express = require('express');
const cron = require('node-cron');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { getWeatherData } = require('./controllers/weatherController');
const WeatherSummary = require('./models/weatherSummaryModel');

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

app.get('/api/weather/test', async (req, res) => {
    try {
      await getWeatherData();
      res.status(200).json({ message: 'Weather data fetched successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching weather data', error });
    }
  });

  // Get weather summaries for all cities
app.get('/api/weather', async (req, res) => {
  try {
    const weatherSummaries = await WeatherSummary.find({});
    res.json(weatherSummaries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving weather data', error: error.message });
  }
});

app.get('/home',(req,res) => {
  res.json("BAckend is sending the data");
})


// Schedule weather data fetching every 5 minutes
// console.log('Cron job is scheduled');

// cron.schedule('*/30 * * * * *', () => {
//   console.log('Fetching weather data...');
//   getWeatherData();
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
