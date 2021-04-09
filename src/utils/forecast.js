const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // https://openweathermap.org
  // const API_KEY = "67a0dd936b66e2ee8cb623c42333ef0d";
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

  // https://weatherbit.io
  const API_KEY = "ffa5d433893649139027f6de73e1d31f";
  const url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}&include=minutely`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: body.data[0].temp,
        windSpeed: body.data[0].wind_spd,
        windDirection: body.data[0].wind_dir,
        description: body.data[0].weather.description,
      });
    }
  });
};

module.exports = forecast;
