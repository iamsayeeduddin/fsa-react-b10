import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const searchWeather = () => {
    axios
      .get(import.meta.env.VITE_WEATHER_API_URL + `/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCity("");
      console.log(position);
      axios
        .get(
          import.meta.env.VITE_WEATHER_API_URL +
            `/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
        )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-10">
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />
        <button className="bg-blue-300 px-4 py-2 rounded" onClick={searchWeather}>
          Search
        </button>
      </div>
      <p>OR</p>
      <button className="bg-blue-300 px-4 py-2 rounded" onClick={getCurrentLocation}>
        Current Location Weather
      </button>
      <div className="flex mt-10 bg-slate-400 rounded-xl">
        <img src={"https://" + weatherData?.current?.condition?.icon} />
        <div>
          <p>{weatherData?.location?.name}</p>
          <p>{weatherData?.location?.region}</p>
          <p>{weatherData?.location?.country}</p>
          <p>{weatherData?.current?.temp_c} C</p>
          <p>{weatherData?.current?.condition?.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
