import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false); //I'm not sure what to do with this.
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(""); //Or this.

  const handleChange = (e) => {
    //Not sure what to put here...😅 Seems to be working, though.
    const value = e.target.value;
    setLocation(value);
  };

  //ASYNC FUNCTION VERSION
  async function getWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5647a97d7c0510ac58b383eda8e00511&units=metric`
    );
    let data = await response.json();
    // console.log(data); //Getting data, ok.
    setWeather(data); //Seems to be working
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    // console.log(location);
    // console.log(weather);
    setLocation(""); //empty input field
  };

  return (
    <div className="container justify-content-center">
      <h1>What's the weather?</h1>
      <div className="row">
        <div id="form" className="col-4">
          <form onSubmit={handleSubmit}>
            <label forhtml="location">
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
        </div>
        <div className="col-4">
          {weather && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{weather.name}</h5>
                <p>{weather.main.temp.toFixed(1)} °C</p>
                <p>{weather.main.temp.toFixed(1) * 1.8 + 32} °F</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// TODO:
// 1. Put weather area together. Not working yet. Location working, errors with other stuff.
// 2. Isn't console logging weather with data, but seems to be pulling it.
// 3. Put code for errors.
// 4. Look into what to do with loading...not sure.
// 5. Styling.

//This was a useful resource: https://bithacker.dev/fetch-weather-openweathermap-api-javascript
