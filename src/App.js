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
        <div className="col-6">
          {weather && (
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h4 className="card-title">{weather.name}</h4>
                <div className="row">
                  <h6 className="col">{weather.main.temp.toFixed(1)} °C</h6>
                  <h6 className="col">
                    {(weather.main.temp.toFixed(1) * 1.8 + 32).toFixed(1)} °F
                  </h6>
                </div>
                {weather.main.temp && (
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// TODO:
//
//
// 3. Put code for errors.
// 4. Look into what to do with loading...not sure.
// 5. Styling.

//This was a useful resource: https://bithacker.dev/fetch-weather-openweathermap-api-javascript
