import React, {PropTypes} from 'react';


function WeatherList({list}) {

  return (
    <li>
      Time {list.dt_txt}
      <img src={'http://openweathermap.org/img/w/' + list.weather[0].icon + '.png'} />
      <b>
        {list.weather.description}
      </b>
      <p>
        Cloud
        <span class="badge badge-info">
          {list.clouds.all}%
        </span>
        Temperature {list.main.temp_min} to {list.main.temp_max}
      </p>
    </li>
  );
}

export default WeatherList;

WeatherList.propTypes = {
  list: PropTypes.PropTypes.object
};
