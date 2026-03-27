import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from "react"; 

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2b162a74fc7db02ab335b1215008493c";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      let result = {
        city: data.name,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        weather: data.weather[0].description,
      };

      return result;
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      return null;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(`You have searched for ${city}`);

    let newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo); 
    }

    setCity(""); 
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
