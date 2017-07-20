require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component, PropTypes} from 'react';
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

  updateWeather(data){
    const d = new WeatherDecorator(data);
    const list = d.dailyReport();
    this.setState({cityName: d.getCity()});
    this.setState({list});
  }

  getWeather() {
    this.props.getWeather('London,us')
      .then((data) => {
        this.updateWeather(data)
      });
  }

  componentWillMount() {
    this.getWeather();
  }

  render() {
    const {list} = this.state;
    return (
      <div className='container'>
        <WeatherHeader cityName={this.state.cityName} />
        <div className='row'>
          <div className='wrapper'>
            {list.map((l) => <WeatherByDay key={l.id()} list={l} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default AppComponent;


AppComponent.propTypes = {
  getWeather: PropTypes.func
};
AppComponent.defaultProps = {getWeather}
