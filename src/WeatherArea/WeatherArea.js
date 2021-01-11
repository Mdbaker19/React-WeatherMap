import React, { Component } from 'react';
import WeatherCard from "../WeatherCards/WeatherCard";
import openWeatherApi from "../weatherKey";

class WeatherArea extends Component{

    state = {
        days : [
            {
                title: "first card temp"
            }, {
                title: "second card temp"
            }, {
                title: "third card temp"
            }, {
                title: "fourth card temp"
            }, {
                title: "fifth card temp"
            }, {
                title: "sixth card temp"
            }, {
                title: "seventh card temp"
            }, {
                title: "eighth card temp"
            }
        ]
    }

    lng = -98.49;
    lat = 29.42;

    addWeatherInfo = (dayList) => {
        this.setState({
            days: [
                {
                    title: dayList[0].weather[0].main
                }, {
                    title: dayList[1].weather[0].main
                }, {
                    title: dayList[2].weather[0].main
                }, {
                    title: dayList[3].weather[0].main
                }, {
                    title: dayList[4].weather[0].main
                }, {
                    title: dayList[5].weather[0].main
                }, {
                    title: dayList[6].weather[0].main
                }, {
                    title: dayList[7].weather[0].main
                }
            ]
        })
    }

    fetch = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lng}&exclude=hourly,minutely&units=imperial&appid=${openWeatherApi}`).then( r => {
        r.json().then(data => {
            console.log(data.daily)
            this.addWeatherInfo(data.daily);
        });
    });


render()
    {
        return (
            <div id="weather">
                <WeatherCard condition={this.state.days[0].title}/>
                <WeatherCard condition={this.state.days[1].title}/>
                <WeatherCard condition={this.state.days[2].title}/>
                <WeatherCard condition={this.state.days[3].title}/>
                <WeatherCard condition={this.state.days[4].title}/>
                <WeatherCard condition={this.state.days[5].title}/>
                <WeatherCard condition={this.state.days[6].title}/>
                <WeatherCard condition={this.state.days[7].title}/>
            </div>
        )
    }
}

export default WeatherArea;