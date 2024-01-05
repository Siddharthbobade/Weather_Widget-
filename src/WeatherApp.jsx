import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react";


export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Pune",
        feelsLike : 20.52,
        humidity : 52,
        temp :  21.01,
        tempMax : 21.01,
        tempMin :  21.01,
        weather : "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); 
    }

return (
    <div className="appBody" style={{textAlign :"center"}}>
        <h1>Weather App </h1>
        <p>Enter the city name for weather information</p>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
)
}













