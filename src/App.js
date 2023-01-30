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
    // handle form submit
  };

  const getWeather = () => {
    // call Open Weather API
  };

  return (
    <div>
      <h1>What's the weather?</h1>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
