import React, {PropTypes} from 'react';


function WeatherList({list}) {

  return (
    <li>
      {list.dt_txt}
    </li>
  );
}

export default WeatherList;

WeatherList.propTypes = {
  list: PropTypes.PropTypes.object
};
