import React, {PropTypes} from 'react';


function WeatherList({list}) {

  return (
    <li>
      <img src={'http://openweathermap.org/img/w/' + list.weather[0].icon + '.png'} />
      <b>Time {list.dt_txt.split(' ')[1]}</b>
      <b>
        {list.weather.description}
      </b>
      <p>
        Cloud
        <span className="label label-default">
          {list.clouds.all}%
        </span>
        Temp {list.main.temp_min} to {list.main.temp_max}
      </p>
    </li>
  );
}

export default WeatherList;

WeatherList.propTypes = {
  list: PropTypes.PropTypes.object
};
