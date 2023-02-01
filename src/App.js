import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false); //I'm not sure what to do with this.
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(""); //Or this.

  const handleChange = (e) => {
    //Not sure what to put here...😅 Seems to be working, though.
    const value = e.target.value;
    setLocation(value);
  };

  //ASYNC FUNCTION VERSION
  async function getWeather() {
    setWeather(null);
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5647a97d7c0510ac58b383eda8e00511&units=metric`
      );
      if (!response.ok) {
        setError(`An error has occured: ${response.status}`);
      } else {
        let data = await response.json();
        setWeather(data);
      }
    } catch (err) {
      setError(`Server Error ${err.message}`);
    }
    setLoading(false);
  }

  async function getForecast() {
    setForecast(null);
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=5647a97d7c0510ac58b383eda8e00511&units=metric`
      );
      if (!response.ok) {
        setError(`An error has occured: ${response.status}`);
      } else {
        const data = await response.json();

        setForecast(data);
      }
    } catch (err) {
      setError(`Server Error ${err.message}`);
    }

    // Could I do something like this to format the date? But loop through the data (i)
    // Calculating day of the week from UTC -- https://stackoverflow.com/questions/36389130/how-to-calculate-the-day-of-the-week-based-on-unix-time#:~:text=In%20summary%3A%20day%20of%20week,and%20minutes%20on%20T%20first.)
    // let date = new Intl.DateTimeFormat("en-US", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }).format(forecast.list[i].dt); // 01/11/2021
    // console.log(date);
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    getForecast();
    // console.log(location);
    // console.log(weather);
    setLocation(""); //empty input field
    setError("");
  };

  return (
    <div className="container justify-content-center">
      <h1>Weather Today</h1>
      <div className="row">
        <div id="form" className="col-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="location">
              <h4>Location:</h4>
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="city name"
              value={location}
              onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <div id="error">{error && <h2>{error}</h2>}</div>
          <div id="loading">{loading && <h2>Loading...</h2>}</div>
        </div>
        <div className="col-6" id="current-weather">
          <div className="card shadow p-3 md-white rounded">
            {weather && (
              <div className="card-body">
                <h4 className="card-title">{weather.name}</h4>
                <div className="row">
                  <h6 className="col">{weather.main.temp.toFixed(1)} °C</h6>
                  <h6 className="col">
                    {(weather.main.temp.toFixed(1) * 1.8 + 32).toFixed(1)} °F
                  </h6>
                </div>
                <div id="weather-icon">
                  {weather.main.temp && (
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="weather-icon"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {forecast && (
        <div id="five-day" className="col">
          <h2>5 Day Forecast for {forecast.city.name}</h2>
          <div className="row">
            <div
              className="card shadow p-3 md-white rounded"
              id="forecast-card"
            >
              <h5 id="day">Tomorrow</h5>
              <h5>{forecast.list[0].main.temp.toFixed(1)} °C</h5>
              <h5>
                {(forecast.list[0].main.temp.toFixed(1) * 1.8 + 32).toFixed(1)}{" "}
                °F
              </h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
            <div
              className="card shadow p-3 md-white rounded"
              id="forecast-card"
            >
              <h5 id="day">Day 2</h5>
              <h5>{forecast.list[8].main.temp.toFixed(1)} °C</h5>
              <h5>
                {(forecast.list[8].main.temp.toFixed(1) * 1.8 + 32).toFixed(1)}{" "}
                °F
              </h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
            <div
              className="card shadow p-3 md-white rounded"
              id="forecast-card"
            >
              <h5 id="day">Day 3</h5>
              <h5>{forecast.list[16].main.temp.toFixed(1)} °C</h5>
              <h5>
                {(forecast.list[16].main.temp.toFixed(1) * 1.8 + 32).toFixed(1)}{" "}
                °F
              </h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
            <div
              className="card shadow p-3 md-white rounded"
              id="forecast-card"
            >
              <h5 id="day">Day 4</h5>
              <h5>{forecast.list[24].main.temp.toFixed(1)} °C</h5>
              <h5>
                {(forecast.list[24].main.temp.toFixed(1) * 1.8 + 32).toFixed(1)}{" "}
                °F
              </h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
            <div
              className="card shadow p-3 md-white rounded"
              id="forecast-card"
            >
              <h5 id="day">Day 5</h5>
              <h5>{forecast.list[32].main.temp.toFixed(1)} °C</h5>
              <h5>
                {(forecast.list[32].main.temp.toFixed(1) * 1.8 + 32).toFixed(1)}{" "}
                °F
              </h5>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>
          Coded by{" "}
          <a href="https://www.linkedin.com/in/crwainstock/">Crystal</a>
        </p>
        <p>
          Made with <a href="https://openweathermap.org/">Open Weather API</a>
        </p>
      </footer>
    </div>
  );
}
// TODO:
// 1. 5 day forecast section
// 2. 5 day forecast function
// 3. Put code for errors.
// 4. Look into what to do with loading...not sure.
// 5. Look into rendering/changing date format: https://stackoverflow.com/questions/16978331/from-unix-timestamp-to-datetime
// 6. Styling.

//This was a useful resource: https://bithacker.dev/fetch-weather-openweathermap-api-javascript
