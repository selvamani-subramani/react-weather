require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component} from 'react';
import {getWeather} from '../utils/openweather-api';
import WeatherDecorator from '../decorator/weatherDecorator'
import WeatherHeader from './main/WeatherHeader'
import WeatherByDay from './main/WeatherByDay'


class AppComponent extends Component {
  constructor() {
    super()
    this.state = {
      cityName: null,
      list: []
    };
  }

  getWeather() {
    getWeather('London,us')
      .then((data) => {
        const d = new WeatherDecorator(data);
        const list = d.dailyReport();
        this.setState({cityName: d.getCity()});
        this.setState({list});
      });
  }

  componentWillMount() {
    this.getWeather();
  }

  render() {
    const {list} = this.state;
    return (
      <div className='main-container'>
        <WeatherHeader cityName={this.state.cityName} />
        <div className='weather-box'>
          {list.map((l) => <WeatherByDay key={l.id()} list={l} />)}
        </div>
      </div>
    );
  }
}

export default AppComponent;
