import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "--",
        temp: "--",
        temp_min: "--",
        temp_max: "--",
        humidity: "--",
        feels_like: "--",
        weather: "--",  
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}