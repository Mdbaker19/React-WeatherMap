import React from 'react';
import WeatherCard from "../WeatherCards/WeatherCard";
import openWeatherApi from "../weatherKey";

const WeatherArea = () => {

    const lng = -98.49;
    const lat = 29.42;

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=imperial&appid=${openWeatherApi}`).then( r => {
        r.json().then(data => console.log(data));
    });

    return (
        <div id="weather">
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
        </div>
    )
}

export default WeatherArea;