// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState({});

//   useEffect(() => {
//     const API_KEY = "YOUR_API_KEY";
//     const city = "New York";
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//       )
//       .then((response) => {
//         setWeatherData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <div>
//         <p>City: {weatherData.name}</p>
//         <p>Temperature: {weatherData.main?.temp} K</p>
//         <p>Humidity: {weatherData.main?.humidity} %</p>
//         <p>Description: {weatherData.weather?.[0]?.description}</p>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
