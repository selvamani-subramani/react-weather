import React, {PropTypes} from 'react';
import WeatherList from './WeatherList'

function WeatherByDay({list}) {
  return (
    <div className='col-md-4'>
      <h3 className='text-center'>
        {list.date()}
      </h3>
      <ul className='list-unstyled'>
        {list.items.map((l) => <WeatherList key={l.dt} list={l} />)}
      </ul>
    </div>
  );
}

export default WeatherByDay;

WeatherByDay.propTypes = {
  list: PropTypes.PropTypes.object
};
