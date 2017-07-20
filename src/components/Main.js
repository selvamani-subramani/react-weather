require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component} from 'react';
import {getWeather} from '../utils/openweather-api';


class AppComponent extends Component {
  constructor() {
    super()
    this.state = {list: {cod: 'India'}}
  }

  getWeather() {
    getWeather('London,us')
      .then((s) => {
        this.setState({list: s});
      });
  }

  componentWillMount() {
    this.getWeather();
  }


  render() {
    const {list} = this.state
    return (
      <div>
        
      </div>
    );
  }
}

export default AppComponent;
