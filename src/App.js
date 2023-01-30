import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // handle key presses
  };

  const handleSubmit = (e) => {
    getWeather();
  };
  //ASYNC FUNCTION VERSION
  async function getWeather() {
    let key = "5647a97d7c0510ac58b383eda8e00511";
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&appid=" +
        key
    );
    let data = await response.json();
    setLocation(data);
  }
  //FETCH VERSION
  // const getWeather = () => {
  //   let key = "5647a97d7c0510ac58b383eda8e00511";
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=" +
  //       location +
  //       "&appid=" +
  //       key
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setLocation(data);
  //     });
  // };

  return (
    <div>
      <h1>What's the weather?</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
