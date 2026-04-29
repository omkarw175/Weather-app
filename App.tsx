import { useState } from "react";

const API_KEY = "b81cca03a1d9fa0b1ba77b6893df6ae7";

export default function App() {
const [city, setCity] = useState("");
const [weather, setWeather] = useState<any>(null);
const [error, setError] = useState("");

const getWeather = async () => {
if (!city) return;

```
try {
  setError("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod !== 200) {
    setError("City not found!");
    setWeather(null);
    return;
  }

  setWeather(data);
} catch (err) {
  setError("Something went wrong!");
}
```

};

return (
<div style={{ textAlign: "center", marginTop: "50px" }}> <h1>🌦️ Weather App</h1>

```
  <input
    type="text"
    placeholder="Enter city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />

  <button onClick={getWeather}>Get Weather</button>

  {error && <p style={{ color: "red" }}>{error}</p>}

  {weather && (
    <div style={{ marginTop: "20px" }}>
      <h2>{weather.name}</h2>
      <p>🌡️ Temp: {weather.main.temp} °C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>🌥️ Condition: {weather.weather[0].description}</p>
    </div>
  )}
</div>
```

);
}
