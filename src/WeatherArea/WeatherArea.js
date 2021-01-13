import React, { Component } from 'react';
import WeatherCard from "../WeatherCards/WeatherCard";
import openWeatherApi from "../weatherKey";
import Map from "../Map/Map";

class WeatherArea extends Component {

    // map = new Map(this.props);

    state = {
        days: [
            {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }, {
                title: null,
                high: null,
                windSpeed: null
            }
        ],
        lng: -98.49,
        lat: 29.42
    }

    lng = -98.49;
    lat = 29.42;

    addWeatherInfo = (dayList) => {
        this.setState({
            days: [
                {
                    title: dayList[0].weather[0].main,
                    high: dayList[0].temp.max,
                    windSpeed: dayList[0].wind_speed
                }, {
                    title: dayList[1].weather[0].main,
                    high: dayList[1].temp.max,
                    windSpeed: dayList[1].wind_speed
                }, {
                    title: dayList[2].weather[0].main,
                    high: dayList[2].temp.max,
                    windSpeed: dayList[2].wind_speed
                }, {
                    title: dayList[3].weather[0].main,
                    high: dayList[3].temp.max,
                    windSpeed: dayList[3].wind_speed
                }, {
                    title: dayList[4].weather[0].main,
                    high: dayList[4].temp.max,
                    windSpeed: dayList[4].wind_speed
                }, {
                    title: dayList[5].weather[0].main,
                    high: dayList[5].temp.max,
                    windSpeed: dayList[5].wind_speed
                }, {
                    title: dayList[6].weather[0].main,
                    high: dayList[6].temp.max,
                    windSpeed: dayList[6].wind_speed
                }, {
                    title: dayList[7].weather[0].main,
                    high: dayList[7].temp.max,
                    windSpeed: dayList[7].wind_speed
                }
            ]
        })
    }

    fetch = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lng}&exclude=hourly,minutely&units=imperial&appid=${openWeatherApi}`).then(r => {
        r.json().then(data => {
            console.log(data.daily);
            // console.log(this.map.state);
            this.addWeatherInfo(data.daily);
        });
    });

    render() {

        const area = (
            this.state.days.map((day, index) => {
                return <WeatherCard key={index}
                                    condition={day.title}
                                    dayHigh={day.high}
                                    windSpeed={day.windSpeed}/>
            })
        );

        return (
            <div id="weather">
                {area}
            </div>
        );
    }
}

export default WeatherArea;