import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bengaluru");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6127c54b73596dd413a74cbd642dc4c0`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
    };

    fetchApi();
  }, [search]);
  return (
    <div className="container">
      <div className="inputData">
        <input
          type="search"
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {!city ? (
        <p className="error">Incorrect city spelling</p>
      ) : (
        <div>
          {" "}
          <div className="info">
            <h2 className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /> {search}
            </h2>
            <h1 className="temp">{city.temp}°Celcius</h1>
            <h3 className="tempDetails">Min: {city.temp_min}°Celcius </h3>
            <h3 className="tempDetails"> Max :{city.temp_max}°Celcius</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
